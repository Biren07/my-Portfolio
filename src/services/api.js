const BASE_URL = import.meta.env.VITE_API_URL || "https://portfoliobackend-6muz.onrender.com/api";

// Admin Auth Login
export const adminLogin = async (username, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
  return response;
};

// Fetch all project records
export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`);
  return response;
};

// Create project entry (using FormData for image binaries)
export const createProject = async (formData, token) => {
  const response = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`
      // Note: do NOT set Content-Type for dynamic multipart boundary
    },
    body: formData
  });
  return response;
};

// Delete project entry
export const deleteProject = async (id, token) => {
  const response = await fetch(`${BASE_URL}/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response;
};

// Submit client contact message
export const submitContact = async (formData) => {
  const response = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });
  return response;
};

// Fetch client contact inbox messages
export const getContacts = async (token) => {
  const response = await fetch(`${BASE_URL}/contact`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response;
};

// Fetch admin profile (profile image & resume)
export const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/auth/profile`);
  return response;
};

// Update profile details (using FormData for image and document files)
export const updateProfile = async (formData, token) => {
  const response = await fetch(`${BASE_URL}/auth/profile`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`
      // Do NOT set Content-Type header to allow browser to generate boundary
    },
    body: formData
  });
  return response;
};
