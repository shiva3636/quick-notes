
export const generateBgColor = (color, isLighter = false) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Determine lightness factor based on condition
    const lightnessFactor = isLighter ? 0.9 : 0.8;

    // Make it lighter by blending with white
    const newR = Math.round(r + (255 - r) * lightnessFactor);
    const newG = Math.round(g + (255 - g) * lightnessFactor);
    const newB = Math.round(b + (255 - b) * lightnessFactor);

    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};