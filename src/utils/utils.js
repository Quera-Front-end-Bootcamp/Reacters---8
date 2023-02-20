
import {coursesData} from '../constants/courseConstants';

export const getDiscount = (id) => coursesData.find(item => item.id == id)?.discount;
export const getModalSrc = (id) => coursesData.find(item => item.id == id)?.modalSrc;
export const getHeroSrc = (id) => coursesData.find(item => item.id == id)?.heroSrc;
export const getAlt = (id) => coursesData.find(item => item.id == id)?.alt;

export const getProgressValue = (data) => (data.students.length / data.capacity) * 100
