// Utility pura - pode ser usada em Server e Client Components
export function whatsappLink(message) {
    return `https://wa.me/5521992340607?text=${encodeURIComponent(message)}`;
}
