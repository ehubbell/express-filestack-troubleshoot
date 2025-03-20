let storage = {};

export const getValue = key => {
	return storage[key];
};

export const storeValue = (key, value) => {
	return (storage[key] = value);
};

export const clearStorage = () => {
	storage = {};
};
