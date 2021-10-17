export const vh = window.innerHeight / 100;
export const vw = window.innerWidth / 100;

export const getLargerUnit = () => {
	if (vh > vw) {
		return vh;
	} else {
		return vw;
	}
};