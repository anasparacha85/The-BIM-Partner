


import React, { useState } from "react";
import { ChevronLeft, Facebook, Twitter, Linkedin, Youtube, Link as LinkIcon, FileText } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogsData from "../data/BlogData";

// Blog Data Array - 5 BIM Engineering Related Blogs


const Blogs = () => {
  // Simulate getting slug from URL - default to first blog
  const navigate=useNavigate()
 const { slug } = useParams();
  const blog = blogsData.find(b => b.slug === slug) || blogsData[0];
  const [commentForm, setCommentForm] = useState({ 
    name: '', 
    email: '', 
    website: '', 
    comment: '' 
  });
  const handleShare = (platform) => {
    const url = window.location.href;
    const text = blog.title;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', commentForm);
    alert('Comment submitted successfully!');
    setCommentForm({ name: '', email: '', website: '', comment: '' });
  };

  const handleInputChange = (field, value) => {
    setCommentForm(prev => ({ ...prev, [field]: value }));
  };

  // Get other blogs for sidebar (exclude current)
  const otherBlogs = blogsData.filter(b => b.slug !== blog.slug).slice(0, 4);
  
  // Categories from all blogs
  const categories = [...new Set(blogsData.map(b => b.category))];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-xl md:text-[27px] uppercase font-bold text-black">{blog.title}</h1>
          <p className="text-gray-600 text-sm md:text-base">
            Home / Blog / <span className="text-black">{blog.category}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex justify-center py-10">
        <div className="w-full md:w-[80%] mx-auto px-2 md:px-0 py-8 flex flex-col lg:flex-row gap-8">
          
          {/* Left Content */}
          <div className="flex-1">
            {/* Hero Image */}
            <div className="bg-white mb-8">
              <div className="relative h-64 md:h-96">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-900/20"></div>
              </div>

              {/* Meta Info Bar */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>{blog.date}</span>
                  <span className="font-semibold text-gray-900">/ {blog.category}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer hover:text-orange-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m-2 8c-4.418 0-8-2.239-8-5V7a4 4 0 014-4h12a4 4 0 014 4v8c0 2.761-3.582 5-8 5H9l-2 2z"/>
                  </svg>
                  <span>{blog.comments} Comments</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6">{blog.description}</p>
                <p className="text-gray-600 mb-6">{blog.fullDescription}</p>
                <div className="bg-gray-800 text-white p-6 rounded-lg border-l-4 border-orange-500 italic text-sm mb-6">
                  {blog.quote}
                </div>
                <p className="text-gray-600 mb-6">{blog.secDescription}</p>
                <p className="text-gray-600 mb-2">{blog.secFullDescription}</p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 py-4 border-gray-200">
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <LinkIcon className="w-4 h-4"/>
                  <span className="font-semibold text-gray-900">{blog.tags.join(', ')}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer hover:text-orange-500 transition">
                  <span>Share</span>
                  <div className="flex gap-4 text-gray-500">
                 <button onClick={()=>handleShare('facebook')} className="cursor-pointer hover:text-orange-500"> <Facebook size={16} className=""/></button>  
                   <button onClick={()=>handleShare('twitter')} className="cursor-pointer hover:text-orange-500">  <Twitter size={16} /></button>
                   <button onClick={()=>handleShare('linkedin')} className="cursor-pointer hover:text-orange-500">  <Linkedin size={16} /></button>
                 <button onClick={()=>handleShare('youtube')} className="cursor-pointer hover:text-orange-500">    <Youtube size={16} /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Section */}
            <div className="bg-white border border-gray-200 p-6 flex flex-col md:flex-row gap-6 mb-12">
              <img src={blog.authorImage} alt={blog.author} className="w-24 h-24 rounded object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{blog.author}</h4>
                <p className="text-gray-600 text-sm mb-6">
                  {blog.authorBio}
                </p>
                <div className="flex gap-4 text-gray-500">
                  <Facebook size={16} className="cursor-pointer hover:text-orange-500"/>
                  <Twitter size={16} className="cursor-pointer hover:text-orange-500"/>
                  <Linkedin size={16} className="cursor-pointer hover:text-orange-500"/>
                  <Youtube size={16} className="cursor-pointer hover:text-orange-500"/>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">2 Comments</h3>
              {[1, 2].map((idx) => (
                <div key={idx} className="flex border-gray-200 border px-4 py-2 items-start gap-4 mb-6">
                  <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVLdSDmgrZN7TkzbHJb8dD0_7ASUQuERL2A&s`} alt="User" className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold">User {idx}</h5>
                      <button className="text-sm text-orange-500">Reply</button>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
                    <p className="text-gray-600 text-sm">
                      {idx === 1 ? 'Great insights on BIM implementation! This will definitely help our team.' : 'Very informative article. Looking forward to more content like this.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Leave a Reply Section */}
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-4">Leave a Reply</h3>
              <p className="text-sm text-gray-500 mb-6">Your email address will not be published.</p>
              <div className="space-y-4">
                <textarea 
                  placeholder="Your Comment" 
                  value={commentForm.comment}
                  onChange={(e) => handleInputChange('comment', e.target.value)}
                  className="w-full border border-gray-200 rounded p-3 h-28"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name *" 
                    value={commentForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full border border-gray-200 rounded p-3" 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email *" 
                    value={commentForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full border border-gray-200 rounded p-3" 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Your Website" 
                  value={commentForm.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full border border-gray-200 rounded p-3" 
                />
                <button 
                  onClick={handleCommentSubmit}
                  className="bg-orange-500 text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition"
                >
                  Send Comment
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 lg:sticky lg:top-8 h-fit space-y-6">
            {/* Popular Posts */}
            <div className="bg-white overflow-hidden">
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-semibold text-gray-900">POPULAR POSTS</h3>
                <div className="w-16 h-1 bg-orange-500 mt-1"></div>
              </div>
              <div className="divide-y divide-gray-200">
                {otherBlogs.map((post, index) => (
                  <Link 
    key={index} 
    to={`/blogs/${post.slug}`}
    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
  >
                    <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 hover:text-orange-500">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
             {/* Recent Posts */}
            <div className="bg-white overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">RECENT POSTS</h3>
                <div className="w-16 h-1 bg-orange-500 mt-1"></div>
              </div>
              <div className="divide-y divide-gray-200">
                {blogsData.map((post, index) => (
                                 <Link 
    key={index} 
    to={`/blogs/${post.slug}`}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <h4 className="font-semibold flex gap-2 text-gray-500 text-sm mb-1 hover:text-orange-500">
                      <ChevronLeft size={16}/>{post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>


            {/* Categories */}
            <div className="bg-white overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">CATEGORIES</h3>
                <div className="w-16 h-1 bg-orange-500 mt-1"></div>
              </div>
              <div className="divide-y divide-gray-200">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <h4 className="font-semibold flex gap-2 text-gray-500 text-sm mb-1 hover:text-orange-500">
                      <ChevronLeft size={16}/>{category}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

           
            {/* CTA Box */}
            <div className="bg-orange-500 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">DO YOU NEED ANY HELP?</h3>
              <p className="mb-8 leading-relaxed">
                My job is to help professionals to achieve their industrial goals 
                whilst having adequate protection along the way.
              </p>
              <button onClick={()=>navigate('/contact-us')} className="bg-white cursor-pointer text-orange-500 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                CONTACT NOW
              </button>
            </div>
             {/* Testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-6xl text-orange-500 mb-4">"</div>
              <p className="text-gray-600 mb-6">{blog.testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img src={blog.testimonial.image} alt={blog.testimonial.author} className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">{blog.testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{blog.testimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Company Presentation */}
            <button className="w-full bg-orange-500 text-white p-4 rounded-lg font-semibold flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              COMPANY PRESENTATION
            </button>
          </div>
            
        </div>
        
      </div>
      
    </div>
  );
}

export default Blogs;