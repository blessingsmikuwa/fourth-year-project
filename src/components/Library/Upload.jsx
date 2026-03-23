import { useState } from 'react'

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    form: '',
    type: 'PDF Document',
    description: '',
    file: null
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, publish = true) => {
    e.preventDefault()
    
    if (!formData.title || !formData.subject || !formData.form) {
      alert('Please fill in all required fields')
      return
    }

    alert(`Resource ${publish ? 'published' : 'saved as draft'} successfully!`)
    setFormData({
      title: '',
      subject: '',
      form: '',
      type: 'PDF Document',
      description: '',
      file: null
    })
  }

  return (
    <div className="max-w-2xl">
      <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#21262d]">
          <h2 className="text-sm font-semibold text-[#e6edf3]">Upload New Material</h2>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="text-xs font-medium text-[#8b949e] uppercase tracking-wider mb-1.5 block">Resource Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-[#1c2330] border border-[#21262d] rounded-lg px-3 py-2 text-sm text-[#e6edf3] outline-none focus:border-[#388bfd]"
                placeholder="e.g. Form 3 Biology Notes – Cell Division"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-xs font-medium text-[#8b949e] uppercase tracking-wider mb-1.5 block">Subject *</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1c2330] border border-[#21262d] rounded-lg px-3 py-2 text-sm text-[#e6edf3] outline-none focus:border-[#388bfd]"
                >
                  <option value="">Select subject</option>
                  <option>Mathematics</option>
                  <option>English</option>
                  <option>Biology</option>
                  <option>Chemistry</option>
                  <option>Physics</option>
                  <option>History</option>
                  <option>Geography</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-[#8b949e] uppercase tracking-wider mb-1.5 block">Form Level *</label>
                <select 
                  name="form"
                  value={formData.form}
                  onChange={handleChange}
                  className="w-full bg-[#1c2330] border border-[#21262d] rounded-lg px-3 py-2 text-sm text-[#e6edf3] outline-none focus:border-[#388bfd]"
                >
                  <option value="">Select form</option>
                  <option>Form 1</option>
                  <option>Form 2</option>
                  <option>Form 3</option>
                  <option>Form 4</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-xs font-medium text-[#8b949e] uppercase tracking-wider mb-1.5 block">Resource Type</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-[#1c2330] border border-[#21262d] rounded-lg px-3 py-2 text-sm text-[#e6edf3] outline-none focus:border-[#388bfd]"
                >
                  <option>PDF Document</option>
                  <option>Word Document</option>
                  <option>Quiz / Test</option>
                  <option>Video</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-[#8b949e] uppercase tracking-wider mb-1.5 block">Target Audience</label>
                <select 
                  name="audience"
                  className="w-full bg-[#1c2330] border border-[#21262d] rounded-lg px-3 py-2 text-sm text-[#e6edf3] outline-none focus:border-[#388bfd]"
                >
                  <option>Students</option>
                  <option>Teachers</option>
                  <option>Both</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-medium text-[#8b949e] uppercase tracking-wider mb-1.5 block">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-[#1c2330] border border-[#21262d] rounded-lg px-3 py-2 text-sm text-[#e6edf3] outline-none focus:border-[#388bfd]"
                rows="3"
                placeholder="Briefly describe the content of this resource…"
              />
            </div>

            <div 
              className="border-2 border-dashed border-[#21262d] rounded-lg p-7 text-center cursor-pointer hover:border-[#388bfd] transition-all mb-4"
              onClick={() => document.getElementById('fileInput').click()}
            >
              <div className="text-3xl mb-2">📎</div>
              <div className="text-sm text-[#8b949e]">Click to select file or drag and drop</div>
              <div className="text-[11px] text-[#6e7681] mt-1">PDF, DOCX, MP4 · Max 50 MB</div>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
              />
              {formData.file && (
                <div className="mt-2 text-xs text-[#388bfd]">Selected: {formData.file.name}</div>
              )}
            </div>

            <div className="flex gap-2.5">
              <button 
                className="bg-[#2ea043] text-white px-3.5 py-1.5 rounded-lg text-sm font-medium hover:bg-[#3fb950] transition-all"
                onClick={(e) => handleSubmit(e, true)}
              >
                Upload & Publish
              </button>
              <button 
                className="bg-[#1c2330] text-[#8b949e] border border-[#21262d] px-3.5 py-1.5 rounded-lg text-sm font-medium hover:text-[#e6edf3] hover:border-[#6e7681] transition-all"
                onClick={(e) => handleSubmit(e, false)}
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Upload