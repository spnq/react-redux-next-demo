let url: string; 
export function updateRatIfNeeded() {
	if (typeof window === 'undefined' ||  document.location.href === url) return;

	url = document.location.href;
	console.log(document.location.href);
}