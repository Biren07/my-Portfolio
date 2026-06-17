import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { 
  FolderGit2, 
  Mail, 
  LogOut, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Github, 
  Loader2, 
  Upload, 
  Tag, 
  Sparkles,
  MessageSquare,
  User,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  getProjects, 
  getContacts, 
  createProject, 
  deleteProject,
  getProfile,
  updateProfile
} from "../services/api";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Add Project Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Ecommerce");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [accentColor, setAccentColor] = useState("from-emerald-500 to-teal-600");
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Profile Settings State
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeName, setResumeName] = useState("");
  const [profileData, setProfileData] = useState({ username: "", profileImage: "", resume: "" });
  const [isProfileSaving, setIsProfileSaving] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("adminToken");
    
    try {
      // Fetch Projects using API service
      const projectsRes = await getProjects();
      if (projectsRes.ok) {
        const projectsData = await projectsRes.json();
        setProjects(projectsData);
      }

      // Fetch Messages using API service (Authorized)
      const messagesRes = await getContacts(token);
      if (messagesRes.ok) {
        const messagesData = await messagesRes.json();
        setMessages(messagesData);
      }

      // Fetch Profile details using API service
      const profileRes = await getProfile();
      if (profileRes.ok) {
        const profileInfo = await profileRes.json();
        setProfileData(profileInfo);
        if (profileInfo.profileImage) {
          setProfileImagePreview(profileInfo.profileImage);
        }
        if (profileInfo.resume) {
          // Extract file name or show placeholder
          setResumeName(profileInfo.resume.split("/").pop());
        }
      }
    } catch (error) {
      console.error("Fetch Data Error:", error);
      toast({
        title: "Error fetching data",
        description: "Failed to connect to backend API.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    toast({
      title: "Logged out",
      description: "Successfully cleared admin session."
    });
    navigate("/");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !imageFile) {
      return toast({
        title: "Missing fields",
        description: "Title, Description, and Project Image are required.",
        variant: "destructive"
      });
    }

    setIsSubmitting(true);
    const token = localStorage.getItem("adminToken");
    const formData = new FormData();
    
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("demoUrl", demoUrl || "#");
    formData.append("githubUrl", githubUrl || "#");
    formData.append("accentColor", accentColor);
    formData.append("featured", featured);
    formData.append("image", imageFile);

    try {
      const response = await createProject(formData, token);

      if (response.ok) {
        toast({
          title: "Project Added! 🚀",
          description: "New project created successfully.",
          variant: "success",
          className: "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
        });
        
        // Reset form
        setTitle("");
        setCategory("Ecommerce");
        setDescription("");
        setTags("");
        setDemoUrl("");
        setGithubUrl("");
        setAccentColor("from-emerald-500 to-teal-600");
        setFeatured(false);
        setImageFile(null);
        setImagePreview("");
        setShowAddForm(false);
        
        // Refresh
        fetchData();
      } else {
        const errorData = await response.json();
        toast({
          title: "Failed to add project",
          description: errorData.message || "An error occurred.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Server upload error",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const response = await deleteProject(id, token);

      if (response.ok) {
        toast({
          title: "Project Deleted",
          description: "Project record has been removed."
        });
        fetchData();
      } else {
        toast({
          title: "Failed to delete project",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Server delete error",
        variant: "destructive"
      });
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      setResumeName(file.name);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsProfileSaving(true);
    const token = localStorage.getItem("adminToken");
    const formData = new FormData();

    if (profileImageFile) {
      formData.append("profileImage", profileImageFile);
    }
    if (resumeFile) {
      formData.append("resume", resumeFile);
    }

    try {
      const response = await updateProfile(formData, token);
      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        toast({
          title: "Profile Updated! ✨",
          description: "Profile details updated successfully.",
          variant: "success",
          className: "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
        });
        setProfileImageFile(null);
        setResumeFile(null);
        fetchData();
      } else {
        const errorData = await response.json();
        toast({
          title: "Failed to update profile",
          description: errorData.message || "An error occurred.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Server update error",
        variant: "destructive"
      });
    } finally {
      setIsProfileSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col p-4 md:p-8">
      {/* Top Header */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-border pb-6 mb-8">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Admin Control Panel
          </h1>
          <p className="text-muted-foreground text-sm">Manage projects and check client requests</p>
        </div>
        
        <div className="flex gap-3">
          <motion.button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-colors cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Portfolio
          </motion.button>
          
          <motion.button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground text-sm font-medium hover:opacity-90 flex items-center gap-2 cursor-pointer shadow-md shadow-destructive/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut size={16} /> Logout
          </motion.button>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Navigation Tabs */}
        <div className="flex border-b border-border mb-6">
          {[
            { id: "projects", label: "Projects", icon: FolderGit2 },
            { id: "messages", label: "Inbox Messages", icon: Mail },
            { id: "profile", label: "Profile Settings", icon: User }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative py-4 px-6 font-semibold text-sm flex items-center gap-2 cursor-pointer transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeAdminTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic content rendering */}
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground text-sm font-medium">Fetching dashboard records...</p>
          </div>
        ) : (
          <div className="flex-1">
            {activeTab === "projects" && (
              <div className="space-y-6">
                {/* Add Project Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Project Listings ({projects.length})</h2>
                  <motion.button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 cursor-pointer hover:shadow-md transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Plus size={16} /> Add New Project
                  </motion.button>
                </div>

                {/* Add Project Form Drawer */}
                <AnimatePresence>
                  {showAddForm && (
                    <motion.div
                      className="bg-card border border-border/80 rounded-2xl p-6 shadow-md text-left"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Sparkles size={18} className="text-primary" /> Create Project Record
                      </h3>

                      <form onSubmit={handleCreateProject} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Project Title</label>
                            <input
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="e.g. DreamDock Job Portal"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Category</label>
                              <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <option value="Ecommerce">Ecommerce</option>
                                <option value="Job Portal">Job Portal</option>
                                <option value="Communication">Communication</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Accent Gradient</label>
                              <select
                                value={accentColor}
                                onChange={(e) => setAccentColor(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <option value="from-emerald-500 to-teal-600">Emerald to Teal</option>
                                <option value="from-purple-500 to-indigo-600">Purple to Indigo</option>
                                <option value="from-blue-500 to-cyan-600">Blue to Cyan</option>
                                <option value="from-amber-400 to-orange-600">Amber to Orange</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Tech Tags (comma separated)</label>
                            <div className="relative">
                              <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="w-full px-4 py-2.5 pl-10 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="React, Express, MongoDB, Socket.IO"
                              />
                              <Tag size={16} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Live Demo URL</label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={demoUrl}
                                  onChange={(e) => setDemoUrl(e.target.value)}
                                  className="w-full px-4 py-2.5 pl-10 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                  placeholder="https://..."
                                />
                                <ExternalLink size={14} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">GitHub Repo URL</label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={githubUrl}
                                  onChange={(e) => setGithubUrl(e.target.value)}
                                  className="w-full px-4 py-2.5 pl-10 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                  placeholder="https://github.com/..."
                                />
                                <Github size={14} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pt-2">
                            <input
                              type="checkbox"
                              id="featured"
                              checked={featured}
                              onChange={(e) => setFeatured(e.target.checked)}
                              className="rounded border-border text-primary focus:ring-primary"
                            />
                            <label htmlFor="featured" className="text-sm font-medium text-muted-foreground cursor-pointer">Featured Project</label>
                          </div>
                        </div>

                        {/* Right column - description and upload */}
                        <div className="space-y-4 flex flex-col justify-between">
                          <div>
                            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Project Description</label>
                            <textarea
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                              rows={4}
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                              placeholder="Describe the application, scope, and engineering details..."
                            />
                          </div>

                          {/* Image upload preview */}
                          <div>
                            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Project Mockup Image</label>
                            <div className="border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center bg-background min-h-[140px] relative">
                              {imagePreview ? (
                                <div className="relative w-full h-32 rounded-lg overflow-hidden border border-border">
                                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                  <button
                                    type="button"
                                    onClick={() => { setImageFile(null); setImagePreview(""); }}
                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-md cursor-pointer"
                                  >
                                    <Trash2 size={12} />
                                  </button>
                                </div>
                              ) : (
                                <label className="flex flex-col items-center justify-center cursor-pointer gap-2 py-4 w-full">
                                  <Upload size={24} className="text-muted-foreground" />
                                  <span className="text-xs font-medium text-muted-foreground">Click to upload screenshot</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    required
                                  />
                                </label>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-3 pt-2">
                            <motion.button
                              type="button"
                              onClick={() => setShowAddForm(false)}
                              className="flex-1 py-3 px-6 rounded-xl border border-border font-semibold text-sm hover:bg-muted cursor-pointer"
                              whileTap={{ scale: 0.98 }}
                            >
                              Cancel
                            </motion.button>
                            
                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                              whileTap={{ scale: 0.98 }}
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  <span>Uploading...</span>
                                </>
                              ) : (
                                <span>Publish Project</span>
                              )}
                            </motion.button>
                          </div>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Projects Listings Grid */}
                {projects.length === 0 ? (
                  <div className="border border-border/50 rounded-2xl p-12 text-center text-muted-foreground bg-card/20">
                    <FolderGit2 size={40} className="mx-auto mb-3 opacity-40 text-primary" />
                    <p className="font-semibold text-sm">No projects published yet</p>
                    <p className="text-xs mt-1">Add a project to display on your portfolio homepage.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                      <div
                        key={project._id}
                        className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between text-left group hover:border-primary/40 transition-colors"
                      >
                        <div className="h-40 overflow-hidden relative border-b border-border">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                            {project.category}
                          </div>
                        </div>
                        
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-base mb-1.5">{project.title}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-3 mb-4 leading-relaxed">{project.description}</p>
                          </div>
                          
                          <div className="flex gap-2 justify-end border-t border-border/50 pt-3">
                            {project.demoUrl && project.demoUrl !== "#" && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-secondary/50 text-foreground hover:text-primary border border-border text-xs flex items-center gap-1"
                                title="Live Demo"
                              >
                                <ExternalLink size={13} />
                              </a>
                            )}
                            {project.githubUrl && project.githubUrl !== "#" && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-secondary/50 text-foreground hover:text-primary border border-border text-xs flex items-center gap-1"
                                title="Github Code"
                              >
                                <Github size={13} />
                              </a>
                            )}
                            <button
                              onClick={() => handleDeleteProject(project._id)}
                              className="p-2 rounded-lg bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white border border-red-500/20 text-xs flex items-center justify-center cursor-pointer transition-colors"
                              title="Delete Project"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "messages" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-left">Contact Messages ({messages.length})</h2>

                {messages.length === 0 ? (
                  <div className="border border-border/50 rounded-2xl p-12 text-center text-muted-foreground bg-card/20">
                    <MessageSquare size={40} className="mx-auto mb-3 opacity-40 text-primary" />
                    <p className="font-semibold text-sm">Inbox is empty</p>
                    <p className="text-xs mt-1">Submitted client contact messages will appear here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg._id}
                        className="bg-card border border-border/50 rounded-xl p-5 md:p-6 shadow-sm text-left flex flex-col md:flex-row justify-between gap-4"
                      >
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <span className="font-bold text-base text-foreground">{msg.name}</span>
                            <span className="text-xs text-muted-foreground">({msg.email})</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                        </div>
                        
                        <div className="flex md:flex-col justify-between items-end shrink-0">
                          <span className="text-[10px] text-muted-foreground uppercase font-mono">
                            {new Date(msg.createdAt).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="bg-card border border-border/80 rounded-2xl p-6 md:p-8 shadow-md text-left">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <User size={18} className="text-primary" /> Profile Settings
                  </h3>

                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    {/* Profile Image Section */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-muted-foreground block">Profile Image</label>
                      <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-muted/20 border border-border rounded-xl">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-border shrink-0 bg-background flex items-center justify-center">
                          {profileImagePreview ? (
                            <img src={profileImagePreview} alt="Profile Preview" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs text-center p-2">No Image</div>
                          )}
                        </div>
                        <div className="flex-grow space-y-2">
                          <label className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2.5 rounded-xl cursor-pointer transition-colors border border-border w-fit">
                            <Upload size={14} />
                            <span>Upload Image</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleProfileImageChange}
                              className="hidden"
                            />
                          </label>
                          <p className="text-[11px] text-muted-foreground text-left">Supported formats: JPG, JPEG, PNG, WEBP (Square ratio recommended)</p>
                        </div>
                      </div>
                    </div>

                    {/* Resume Section */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-muted-foreground block">Resume / CV Document</label>
                      <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-muted/20 border border-border rounded-xl">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                          <FileText size={32} />
                        </div>
                        <div className="flex-grow space-y-2 text-left">
                          {resumeName ? (
                            <div className="text-sm font-medium text-foreground truncate max-w-[300px]">
                              Current file: <span className="text-primary font-semibold">{resumeName}</span>
                            </div>
                          ) : (
                            <div className="text-xs text-muted-foreground">No CV uploaded. Static resume will be used.</div>
                          )}
                          <label className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2.5 rounded-xl cursor-pointer transition-colors border border-border w-fit">
                            <Upload size={14} />
                            <span>Upload New CV</span>
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleResumeChange}
                              className="hidden"
                            />
                          </label>
                          <p className="text-[11px] text-muted-foreground text-left">Supported formats: PDF, DOC, DOCX</p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="border-t border-border pt-4 flex justify-end">
                      <motion.button
                        type="submit"
                        disabled={isProfileSaving || (!profileImageFile && !resumeFile)}
                        className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                        whileTap={{ scale: 0.98 }}
                      >
                        {isProfileSaving ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Saving Settings...</span>
                          </>
                        ) : (
                          <span>Save Changes</span>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
