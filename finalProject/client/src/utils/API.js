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
  }
};
