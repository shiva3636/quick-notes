import React, { useState, useRef, useEffect } from 'react';
import {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    List,
    ListOrdered,
    Indent,
    Outdent,
    Link,
    Download,
    FileText,
    Image,
    X,
    Upload
} from 'lucide-react';

const RichTextEditor = ({
    content,
    setContent
}) => {

    const [showFileDialog, setShowFileDialog] = useState(false);
    const [fontSize, setFontSize] = useState('16');
    const [fontFamily, setFontFamily] = useState('Poppins');
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current && !editorRef.current.innerHTML) {
            editorRef.current.innerHTML = content;
        }
    }, []);

    const formatText = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current.focus();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.execCommand('insertHTML', false, '<br><br>');
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (file.type.startsWith('image/')) {
                    const img = `<img src="${e.target.result}" alt="Uploaded image" style="max-width: 100%; height: auto;" />`;
                    document.execCommand('insertHTML', false, img);
                } else if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
                    const text = e.target.result;
                    document.execCommand('insertHTML', false, text);
                }
            };
            if (file.type.startsWith('image/')) {
                reader.readAsDataURL(file);
            } else {
                reader.readAsText(file);
            }
        }
        setShowFileDialog(false);
    };

    const ToolbarButton = ({ onClick, children, isActive = false, title }) => (
        <button
            onClick={onClick}
            title={title}
            className={`p-2 rounded hover:bg-gray-100 transition-colors ${isActive ? 'bg-gray-200' : ''
                }`}
        >
            {children}
        </button>
    );

    return (
        <div className="max-w-4xl mx-auto bg-white">
            {/* Toolbar */}
            <div className="border border-gray-300 rounded-t-lg p-2 bg-gray-50">
                <div className="flex items-center gap-1 flex-wrap">
                    {/* Font Family */}
                    <select
                        value={fontFamily}
                        onChange={(e) => {
                            setFontFamily(e.target.value);
                            formatText('fontName', e.target.value);
                        }}
                        className="px-2 py-1 border rounded text-sm"
                    >
                        <option value="Poppins">Poppins</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Georgia">Georgia</option>
                    </select>

                    {/* Font Size */}
                    <select
                        value={fontSize}
                        onChange={(e) => {
                            setFontSize(e.target.value);
                            formatText('fontSize', e.target.value);
                        }}
                        className="px-2 py-1 border rounded text-sm w-16"
                    >
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                    </select>

                    <div className="w-px h-6 bg-gray-300 mx-1"></div>

                    {/* Text Formatting */}
                    <ToolbarButton onClick={() => formatText('bold')} title="Bold">
                        <Bold size={16} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => formatText('italic')} title="Italic">
                        <Italic size={16} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => formatText('underline')} title="Underline">
                        <Underline size={16} />
                    </ToolbarButton>

                    <div className="w-px h-6 bg-gray-300 mx-1"></div>

                    {/* Alignment */}
                    <ToolbarButton onClick={() => formatText('justifyLeft')} title="Align Left">
                        <AlignLeft size={16} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => formatText('justifyCenter')} title="Align Center">
                        <AlignCenter size={16} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => formatText('justifyRight')} title="Align Right">
                        <AlignRight size={16} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => formatText('justifyFull')} title="Justify">
                        <AlignJustify size={16} />
                    </ToolbarButton>

                    <div className="w-px h-6 bg-gray-300 mx-1"></div>

                    {/* Lists */}
                    <ToolbarButton onClick={() => formatText('insertUnorderedList')} title="Bullet List">
                        <List size={16} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => formatText('insertOrderedList')} title="Numbered List">
                        <ListOrdered size={16} />
                    </ToolbarButton>

                    <div className="w-px h-6 bg-gray-300 mx-1"></div>

                    {/* Indent */}
                    <ToolbarButton onClick={() => formatText('indent')} title="Indent">
                        <Indent size={16} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => formatText('outdent')} title="Outdent">
                        <Outdent size={16} />
                    </ToolbarButton>

                    <div className="w-px h-6 bg-gray-300 mx-1"></div>

                    {/* Link */}
                    <ToolbarButton
                        onClick={() => {
                            const url = prompt('Enter URL:');
                            if (url) formatText('createLink', url);
                        }}
                        title="Insert Link"
                    >
                        <Link size={16} />
                    </ToolbarButton>

                    {/* File Upload */}
                    <ToolbarButton
                        onClick={() => setShowFileDialog(true)}
                        title="Upload File"
                    >
                        <Upload size={16} />
                    </ToolbarButton>

                    {/* Download */}
                    <ToolbarButton
                        onClick={() => {
                            const blob = new Blob([editorRef.current.innerHTML], { type: 'text/html' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'document.html';
                            a.click();
                            URL.revokeObjectURL(url);
                        }}
                        title="Download"
                    >
                        <Download size={16} />
                    </ToolbarButton>
                </div>
            </div>

            {/* Editor */}
            <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning={true}
                className="border-l border-r border-b border-gray-300 rounded-b-lg p-4 min-h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                    fontFamily: fontFamily,
                    fontSize: `${fontSize}px`,
                    lineHeight: '1.6'
                }}
                onInput={(e) => setContent(e.target.innerHTML)}
                onKeyDown={handleKeyDown}
            />

            {/* File Upload Dialog */}
            {showFileDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Upload Your File</h3>
                            <button
                                onClick={() => setShowFileDialog(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <FileText size={24} className="text-blue-500" />
                                <span>Document File.doc</span>
                            </div>

                            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <Image size={24} className="text-green-500" />
                                <span>Image.png</span>
                            </div>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <input
                                    type="file"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                    id="file-upload"
                                    accept=".doc,.docx,.txt,.png,.jpg,.jpeg,.gif"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <div className="text-gray-500">
                                        <Upload size={48} className="mx-auto mb-2" />
                                        <p>Drag & drop files here</p>
                                        <p className="text-sm">
                                            or <span className="text-blue-500 underline">Browse</span>
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RichTextEditor;