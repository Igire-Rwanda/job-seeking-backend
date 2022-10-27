import AddressModal from "../models/address";
import handleCRUD from "../utils/handleCRUD";


export const createAddress  = handleCRUD.createOne(AddressModal);

export const getAllAddress  = handleCRUD.getAll(AddressModal);