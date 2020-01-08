import axios from "axios";

export default {
  // Gets all Inventorys
  getInventory: function() {
    return axios.get("/api/inventory/");
  },
  // Gets the Inventory with the given id
  getIventoryItem: function(id) {
    return axios.get("/api/inventory/" + id);
  },
  // Deletes the Inventory with the given id
  deleteInventory: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves a Inventory to the database
  saveInventory: function(inventoryData) {
    return axios.post("/api/inventory/", inventoryData);
  },

  // ************* API for Posts ****************
  // Gets all Inventorys
  getPosts: function() {
    return axios.get("/api/posts/");
  },
  // Gets the Posts with the given id
  getIventoryItem: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the Posts with the given id
  deletePosts: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a Posts to the database
  savePosts: function(postsData) {
    return axios.post("/api/posts/", postsData);
  }
  ,

  // ************* API for Comments ****************
  // Gets all Inventorys
  getComments: function() {
    return axios.get("/api/comments/");
  },
  // Gets the Comments with the given id
  getIventoryItem: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the Comments with the given id
  deleteComments: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a Comments to the database
  saveComments: function(CommentsData) {
    return axios.post("/api/comments/", CommentsData);
  }
};
