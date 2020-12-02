export default function isLightColor() {
	const hex = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').replace('#', '');
	const cr = parseInt(hex.substr(0, 2), 16);
	const cg = parseInt(hex.substr(2, 2), 16);
	const cb = parseInt(hex.substr(4, 2), 16);
	const brightness = ((cr * 299) + (cg * 587) + (cb * 114)) / 1000;
	return brightness > 155;
}