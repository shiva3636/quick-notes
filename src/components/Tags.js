import React, { useState } from 'react';
import { X, Plus, Palette } from 'lucide-react';
import { generateBgColor } from '../utils/methods';

// const tagsData = [
//         { id: 1, label: 'Work', color: '#8B5CF6', bgColor: '#EDE9FE' },
//         { id: 2, label: 'ASAP', color: '#F59E0B', bgColor: '#FEF3C7' }
//     ]
const TagManager = ({tags,setTags}) => {
   

    const [showPopup, setShowPopup] = useState(false);
    const [newTagLabel, setNewTagLabel] = useState('');
    const [selectedColor, setSelectedColor] = useState('#8B5CF6');
    const [customColor, setCustomColor] = useState('#8B5CF6');
    const [isCustomColorMode, setIsCustomColorMode] = useState(false);

    const presetLabels = [
        'Personal', 'Urgent', 'Meeting', 'Project', 'Review', 'Bug', 'Feature', 'Documentation'
    ];

    const colorOptions = [
        { name: 'Purple', value: '#8B5CF6', bg: '#EDE9FE' },
        { name: 'Orange', value: '#F59E0B', bg: '#FEF3C7' },
        { name: 'Blue', value: '#3B82F6', bg: '#DBEAFE' },
        { name: 'Green', value: '#10B981', bg: '#D1FAE5' },
        { name: 'Pink', value: '#EC4899', bg: '#FCE7F3' },
        { name: 'Red', value: '#EF4444', bg: '#FEE2E2' },
        { name: 'Indigo', value: '#6366F1', bg: '#E0E7FF' },
        { name: 'Teal', value: '#14B8A6', bg: '#CCFBF1' }
    ];

    const removeTag = (tagId) => {
        setTags(tags.filter(tag => tag.id !== tagId));
    };

    const addTag = () => {
        if (newTagLabel.trim()) {
            const finalColor = isCustomColorMode ? customColor : selectedColor;
            // Generate a lighter background color from the selected color
      

            const selectedColorOption = colorOptions.find(color => color.value === finalColor);
            const bgColor = selectedColorOption ? selectedColorOption.bg : generateBgColor(finalColor);

            const newTag = {
                id: Date.now(),
                label: newTagLabel.trim(),
                color: finalColor,
                bgColor: bgColor
            };
            setTags([...tags, newTag]);
            setNewTagLabel('');
            setIsCustomColorMode(false);
            setSelectedColor('#8B5CF6');
            setCustomColor('#8B5CF6');
            setShowPopup(false);
        }
    };

    const selectPresetLabel = (label) => {
        setNewTagLabel(label);
    };

    return (
        <div className="max-w-2xl mx-auto">

            {/* Tags Display */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags?.map(tag => (
                    <div
                        key={tag.id}
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded text-sm font-medium"
                        style={{
                            backgroundColor: tag.bgColor,
                            color: tag.color
                        }}
                    >
                        {tag.label}
                        <button
                            onClick={() => removeTag(tag.id)}
                            className="flex items-center justify-center hover:bg-black hover:bg-opacity-10 rounded p-0.5"
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}

                {/* Add Button */}
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowPopup(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors"
                >
                    <Plus size={14} />
                    Add
                </button>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Create New Tag</h3>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Label Input with Color Picker */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Label
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={newTagLabel}
                                    onChange={(e) => setNewTagLabel(e.target.value)}
                                    placeholder="Enter tag label"
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    autoFocus
                                />
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <input
                                            type="color"
                                            value={customColor}
                                            onChange={(e) => {
                                                setCustomColor(e.target.value);
                                                setIsCustomColorMode(true);
                                            }}
                                            className="w-10 h-10 rounded border-2 border-gray-300 cursor-pointer opacity-0 absolute inset-0"
                                            title="Choose custom color"
                                        />
                                        <div
                                            style={{ borderColor: customColor || "" }}
                                            className="w-10 h-10 rounded border-2 border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                                            <Palette color={customColor} size={22} className="text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Preset Labels */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Or choose a preset:
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {presetLabels.map(label => (
                                    <button
                                        key={label}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            selectPresetLabel(label)
                                        }}
                                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selection */}
                        {/* <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preset Colors
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {colorOptions.map(color => (
                                    <button
                                        key={color.value}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setSelectedColor(color.value);
                                            setIsCustomColorMode(false);
                                        }}
                                        className={`w-12 h-12 rounded-lg border-2 transition-all ${selectedColor === color.value && !isCustomColorMode
                                                ? 'border-gray-800 scale-110'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                        style={{ backgroundColor: color.bg }}
                                        title={color.name}
                                    >
                                        <div
                                            className="w-6 h-6 rounded-full mx-auto"
                                            style={{ backgroundColor: color.value }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div> */}

                        {/* Preview */}
                        {newTagLabel && (
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preview:
                                </label>
                                <div
                                    className="inline-flex items-center justify-center px-3 py-2 rounded text-sm font-medium"
                                    style={{
                                        backgroundColor: isCustomColorMode
                                            ? (() => {
                                                const hex = customColor.replace('#', '');
                                                const r = parseInt(hex.substr(0, 2), 16);
                                                const g = parseInt(hex.substr(2, 2), 16);
                                                const b = parseInt(hex.substr(4, 2), 16);
                                                const newR = Math.round(r + (255 - r) * 0.8);
                                                const newG = Math.round(g + (255 - g) * 0.8);
                                                const newB = Math.round(b + (255 - b) * 0.8);
                                                return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
                                            })()
                                            : colorOptions.find(c => c.value === selectedColor)?.bg,
                                        color: isCustomColorMode ? customColor : selectedColor
                                    }}
                                >
                                    {newTagLabel}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={addTag}
                                disabled={!newTagLabel.trim()}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                            >
                                Create Tag
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TagManager;