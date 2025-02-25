
import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:5000', 
  baseURL: 'https://menu-card-yken.onrender.com', 

});

export const getMenus = () => api.get('/menus');
export const getMenuItems = (menuId) => api.get(`/menus/${menuId}/items`);
export const createMenu = (menu) => api.post('/menus', menu);
export const createMenuItem = (menuId, menuItem) => api.post(`/menus/${menuId}/items`, menuItem);

