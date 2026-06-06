/* ========================================
   SEARCHCONNECT - JAVASCRIPT FUNCTIONALITY
   Single Page Application Logic
   ======================================== */

/* ========================================
   1. SAMPLE DATA & STATE MANAGEMENT
   ======================================== */

// Global State
const app = {
    currentUser: {
        id: 1,
        username: 'Alex Johnson',
        bio: '📱 Tech enthusiast | 🌍 Digital explorer | 💡 Always learning',
        profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        followers: 2450,
        following: 1230,
        posts: []
    },
    
    posts: [
        {
            id: 1,
            username: 'Sarah Chen',
            userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop',
            caption: 'Amazing sunset at the beach 🌅 #SearchConnect #Travel #BeachLife',
            likes: 342,
            liked: false,
            commentsList: [
                { username: 'John Developer', text: 'Stunning view! 🌟', userPic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
                { username: 'Emma Design', text: 'The colors are perfect!', userPic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' }
            ],
            timestamp: '2 hours ago'
        },
        {
            id: 2,
            username: 'Marcus Tech',
            userPic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop',
            caption: 'New tech gadgets review 📱💻 Check out the full video on YouTube! #Tech #Gadgets #Innovation',
            likes: 891,
            liked: false,
            commentsList: [
                { username: 'Alex Johnson', text: 'Which one is your favorite?', userPic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' }
            ],
            timestamp: '5 hours ago'
        },
        {
            id: 3,
            username: 'Emma Design',
            userPic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=500&fit=crop',
            caption: 'Design inspiration: Minimalist workspace 🎨✨ #Design #Workspace #Aesthetic',
            likes: 567,
            liked: false,
            commentsList: [],
            timestamp: '8 hours ago'
        },
        {
            id: 4,
            username: 'Alex Johnson',
            userPic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
            caption: 'Mountain hiking adventure with friends 🏔️ Feeling alive! #Adventure #Nature #Hiking',
            likes: 423,
            liked: false,
            commentsList: [
                { username: 'Sarah Chen', text: 'Looks amazing! 🏔️', userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
                { username: 'Lisa Fashion', text: 'Wish I was there!', userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
                { username: 'Marcus Tech', text: 'Great shot!', userPic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' }
            ],
            timestamp: '12 hours ago'
        },
        {
            id: 5,
            username: 'Lisa Fashion',
            userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=500&fit=crop',
            caption: 'Summer fashion trends 2024 👗✨ What\'s your favorite? #Fashion #Style #OOTD',
            likes: 712,
            liked: false,
            commentsList: [
                { username: 'Emma Design', text: 'Love this outfit! 💕', userPic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' }
            ],
            timestamp: '1 day ago'
        }
    ],
    
    currentCommentPostId: null,
    currentDeletePostId: null,

    notifications: [
        {
            id: 1,
            type: 'like',
            username: 'Sarah Chen',
            userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            action: 'liked your post',
            time: '5 minutes ago'
        },
        {
            id: 2,
            type: 'follow',
            username: 'Marcus Tech',
            userPic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
            action: 'started following you',
            time: '2 hours ago'
        },
        {
            id: 2,
            type: 'follow',
            username: 'Marcus Tech',
            userPic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
            action: 'started following you',
            time: '2 hours ago'
        },
        {
            id: 3,
            type: 'comment',
            username: 'Emma Design',
            userPic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
            action: 'commented on your post',
            time: '3 hours ago'
        },
        {
            id: 4,
            type: 'like',
            username: 'Lisa Fashion',
            userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
            action: 'liked your post',
            time: '1 day ago'
        },
        {
            id: 5,
            type: 'follow',
            username: 'John Developer',
            userPic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
            action: 'started following you',
            time: '2 days ago'
        }
    ],

    searchTrending: [
        { tag: '#SearchConnect', posts: '12.5K posts' },
        { tag: '#WebDevelopment', posts: '234K posts' },
        { tag: '#MobileFirst', posts: '89K posts' },
        { tag: '#DesignTrends', posts: '567K posts' },
        { tag: '#TechLife', posts: '1.2M posts' },
        { tag: '#CodeLife', posts: '445K posts' }
    ],

    users: [
        { id: 1, username: 'Sarah Chen', userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', bio: 'Travel & Photography' },
        { id: 2, username: 'Marcus Tech', userPic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', bio: 'Tech Enthusiast' },
        { id: 3, username: 'Emma Design', userPic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop', bio: 'UI/UX Designer' },
        { id: 4, username: 'Lisa Fashion', userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', bio: 'Fashion & Lifestyle' },
        { id: 5, username: 'John Developer', userPic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', bio: 'Full Stack Developer' }
    ],
    
    // Filter state
    filterByUsername: null
};

/* ========================================
   2. PAGE NAVIGATION
   ======================================== */

/**
 * Initialize navigation event listeners
 */
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        // Support both click and touch events
        const handleNav = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const pageId = button.getAttribute('data-page');
            
            // Clear filter when clicking home button normally
            if (pageId === 'home-page') {
                app.filterByUsername = null;
            }
            
            navigateToPage(pageId, button);
        };
        
        button.addEventListener('click', handleNav);
        button.addEventListener('touchend', handleNav);
    });
}

/**
 * Navigate to a specific page
 * @param {string} pageId - The ID of the page to navigate to
 * @param {HTMLElement} button - The navigation button that was clicked
 */
function navigateToPage(pageId, button) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Remove active class from all nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Add active class to clicked button
    if (button) {
        button.classList.add('active');
    }
    
    // Call page-specific initialization
    if (pageId === 'home-page') {
        renderFeed();
    } else if (pageId === 'profile-page') {
        renderProfile();
    } else if (pageId === 'notifications-page') {
        renderNotifications();
    } else if (pageId === 'search-page') {
        renderTrendingSection();
    }
}

/* ========================================
   3. HOME FEED FUNCTIONALITY
   ======================================== */

/**
 * Render the feed with all posts
 */
function renderFeed() {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';
    
    // Filter posts if a specific user is selected
    let postsToShow = app.posts;
    if (app.filterByUsername) {
        postsToShow = app.posts.filter(post => post.username === app.filterByUsername);
    }
    
    if (postsToShow.length === 0) {
        feed.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div class="empty-state-text">${app.filterByUsername ? `No posts from ${app.filterByUsername}` : 'No posts yet. Create one to get started!'}</div>
            </div>
        `;
        return;
    }
    
    postsToShow.forEach(post => {
        const postElement = createPostElement(post);
        feed.appendChild(postElement);
    });
}

/**
 * Create a post card element
 * @param {Object} post - Post data object
 * @returns {HTMLElement} - The post card element
 */
function createPostElement(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.setAttribute('data-post-id', post.id);
    
    // Show delete button only for current user's posts
    const isOwnPost = post.username === app.currentUser.username;
    const deleteButton = isOwnPost ? `<button class="delete-post-btn" data-post-id="${post.id}">🗑️</button>` : '';
    
    // Get the current profile picture for the post's user
    let profilePicToUse = post.userPic;
    if (isOwnPost) {
        profilePicToUse = app.currentUser.profilePic;
    } else {
        // Look up the user in the users array to get their current profile pic
        const user = app.users.find(u => u.username === post.username);
        if (user && user.userPic) {
            profilePicToUse = user.userPic;
        }
    }
    
    postCard.innerHTML = `
        <!-- Post Header (Profile Info) -->
        <div class="post-header">
            <img src="${profilePicToUse}" alt="${post.username}" class="post-profile-pic">
            <div class="post-user-info">
                <div class="post-username">${post.username}</div>
                <div class="post-timestamp">${post.timestamp}</div>
            </div>
            ${deleteButton}
        </div>
        
        <!-- Post Image -->
        <img src="${post.image}" alt="Post" class="post-image">
        
        <!-- Post Caption -->
        <div class="post-caption">
            <strong>${post.username}</strong> ${post.caption}
        </div>
        
        <!-- Post Actions -->
        <div class="post-actions">
            <button class="action-btn like-btn ${post.liked ? 'liked' : ''}" data-post-id="${post.id}">
                <span>${post.liked ? '❤️' : '🤍'}</span>
                <span>${post.likes}</span>
            </button>
            <button class="action-btn comment-btn" data-post-id="${post.id}">
                <span>💬</span>
                <span>${post.commentsList.length}</span>
            </button>
        </div>
    `;
    
    // Attach event listeners with both click and touch support
    const likeBtn = postCard.querySelector('.like-btn');
    const commentBtn = postCard.querySelector('.comment-btn');
    const deleteBtn = postCard.querySelector('.delete-post-btn');
    
    if (likeBtn) {
        const handleLikeClick = (e) => {
            e.stopPropagation();
            handleLike(post, likeBtn);
        };
        likeBtn.addEventListener('click', handleLikeClick);
        likeBtn.addEventListener('touchend', handleLikeClick);
    }
    
    if (commentBtn) {
        const handleCommentClick = (e) => {
            e.stopPropagation();
            handleComment(post);
        };
        commentBtn.addEventListener('click', handleCommentClick);
        commentBtn.addEventListener('touchend', handleCommentClick);
    }
    
    if (deleteBtn) {
        const handleDeleteClick = (e) => {
            e.stopPropagation();
            openDeletePostModal(post);
        };
        deleteBtn.addEventListener('click', handleDeleteClick);
        deleteBtn.addEventListener('touchend', handleDeleteClick);
    }
    
    // Click on post card to view details (but not on buttons)
    const handlePostCardClick = (e) => {
        if (!e.target.closest('.action-btn') && !e.target.closest('.delete-post-btn')) {
            openPostDetailModal(post);
        }
    };
    postCard.addEventListener('click', handlePostCardClick);
    postCard.addEventListener('touchend', handlePostCardClick);
    
    return postCard;
}

/**
 * Handle like button click
 * @param {Object} post - Post object
 * @param {HTMLElement} btn - Like button element
 */
function handleLike(post, btn) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    
    btn.classList.toggle('liked');
    const span = btn.querySelector('span:last-child');
    span.textContent = post.likes;
    
    const emoji = btn.querySelector('span:first-child');
    emoji.textContent = post.liked ? '❤️' : '🤍';
    
    showToast(post.liked ? '❤️ Liked!' : 'Unliked', 'info');
}

/**
 * Handle comment button click
 * @param {Object} post - Post object
 */
function handleComment(post) {
    app.currentCommentPostId = post.id;
    openCommentModal(post);
}

/**
 * Open comment modal and display comments
 * @param {Object} post - Post object
 */
function openCommentModal(post) {
    const modal = document.getElementById('comment-modal');
    const commentsList = document.getElementById('comments-list');
    
    // Clear previous comments
    commentsList.innerHTML = '';
    
    // Render comments
    if (post.commentsList.length === 0) {
        commentsList.innerHTML = '<div class="no-comments">No comments yet. Be the first to comment!</div>';
    } else {
        post.commentsList.forEach((comment, index) => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item';
            commentElement.innerHTML = `
                <img src="${comment.userPic}" alt="${comment.username}" class="comment-pic">
                <div class="comment-info">
                    <div class="comment-user">
                        <strong>${comment.username}</strong>
                    </div>
                    <div class="comment-text">${comment.text}</div>
                </div>
            `;
            commentsList.appendChild(commentElement);
        });
    }
    
    // Show modal
    modal.classList.add('show');
}

/**
 * Close comment modal
 */
function closeCommentModal() {
    const modal = document.getElementById('comment-modal');
    modal.classList.remove('show');
    app.currentCommentPostId = null;
}

/**
 * Add a new comment
 */
function addComment() {
    const input = document.getElementById('comment-text-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('💬 Please write a comment!', 'error');
        return;
    }
    
    if (!app.currentCommentPostId) return;
    
    // Find the post
    const post = app.posts.find(p => p.id === app.currentCommentPostId);
    if (!post) return;
    
    // Add comment to post
    const newComment = {
        username: app.currentUser.username,
        text: text,
        userPic: app.currentUser.profilePic
    };
    
    post.commentsList.push(newComment);
    
    // Clear input
    input.value = '';
    
    // Update modal display
    openCommentModal(post);
    
    // Update comment count in feed
    renderFeed();
    
    showToast('✅ Comment posted!', 'success');
}

/* ========================================
   4. CREATE POST FUNCTIONALITY
   ======================================== */

/**
 * Initialize create post functionality
 */
function initCreatePost() {
    const imageUploadArea = document.getElementById('image-upload-area');
    const imageInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview');
    const uploadPlaceholder = document.getElementById('upload-placeholder');
    const captionInput = document.getElementById('caption-input');
    const charCount = document.getElementById('char-count');
    const createPostBtn = document.getElementById('create-post-btn');
    
    // Image upload handling with touch support
    const uploadHandler = (e) => {
        e.stopPropagation();
        imageInput.click();
    };
    imageUploadArea.addEventListener('click', uploadHandler);
    imageUploadArea.addEventListener('touchend', uploadHandler);
    
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imagePreview.src = event.target.result;
                imagePreview.style.display = 'block';
                uploadPlaceholder.style.display = 'none';
                imageUploadArea.classList.add('has-image');
                
                // Add remove button
                addRemoveImageButton(imageUploadArea);
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Character counter
    captionInput.addEventListener('input', (e) => {
        charCount.textContent = e.target.value.length;
    });
    
    // Create post button with touch support
    if (createPostBtn) {
        const createHandler = (e) => {
            e.stopPropagation();
            const caption = captionInput.value.trim();
            
            if (!imagePreview.src || imagePreview.style.display === 'none') {
                showToast('⚠️ Please add an image!', 'error');
                return;
            }
            
            if (!caption) {
                showToast('⚠️ Please add a caption!', 'error');
                return;
            }
            
            // Create new post
            const newPost = {
                id: app.posts.length + 1,
                username: app.currentUser.username,
                userPic: app.currentUser.profilePic,
                image: imagePreview.src,
                caption: caption,
            likes: 0,
            liked: false,
            commentsList: [],
            timestamp: 'just now'
        };
        
        // Add to posts array
        app.posts.unshift(newPost);
        app.currentUser.posts.push(newPost);
        
        // Reset form
        imagePreview.src = '';
        imagePreview.style.display = 'none';
        uploadPlaceholder.style.display = 'flex';
        imageUploadArea.classList.remove('has-image');
        captionInput.value = '';
        charCount.textContent = '0';
        imageInput.value = '';
        
        // Remove remove button if exists
        const removeBtn = imageUploadArea.querySelector('.remove-image-btn');
        if (removeBtn) removeBtn.remove();
        
        showToast('✨ Post created successfully!', 'success');
        
        // Navigate to home to show new post
        navigateToPage('home-page', document.getElementById('nav-home'));
        };
        
        createPostBtn.addEventListener('click', createHandler);
        createPostBtn.addEventListener('touchend', createHandler);
    }
}

/**
 * Add remove image button to upload area
 * @param {HTMLElement} imageUploadArea - The upload area element
 */
function addRemoveImageButton(imageUploadArea) {
    const existingBtn = imageUploadArea.querySelector('.remove-image-btn');
    if (existingBtn) existingBtn.remove();
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-image-btn';
    removeBtn.innerHTML = '✕';
    removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const imageInput = document.getElementById('image-input');
        const imagePreview = document.getElementById('image-preview');
        const uploadPlaceholder = document.getElementById('upload-placeholder');
        
        imagePreview.src = '';
        imagePreview.style.display = 'none';
        uploadPlaceholder.style.display = 'flex';
        imageUploadArea.classList.remove('has-image');
        imageInput.value = '';
        removeBtn.remove();
    });
    
    imageUploadArea.appendChild(removeBtn);
}

/* ========================================
   5. SEARCH FUNCTIONALITY
   ======================================== */

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn) {
        const searchHandler = (e) => {
            e.stopPropagation();
            performSearch();
        };
        searchBtn.addEventListener('click', searchHandler);
        searchBtn.addEventListener('touchend', searchHandler);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

/**
 * Perform search based on input
 */
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    if (!query) {
        searchResults.innerHTML = '';
        return;
    }
    
    let results = [];
    
    // Search users
    results = results.concat(
        app.users
            .filter(user => 
                user.username.toLowerCase().includes(query) ||
                user.bio.toLowerCase().includes(query)
            )
            .map(user => ({
                type: 'user',
                ...user
            }))
    );
    
    // Search hashtags/posts
    results = results.concat(
        app.searchTrending
            .filter(trend => trend.tag.toLowerCase().includes(query))
            .map(trend => ({
                type: 'hashtag',
                ...trend
            }))
    );
    
    // Search posts by caption
    results = results.concat(
        app.posts
            .filter(post =>
                post.caption.toLowerCase().includes(query) ||
                post.username.toLowerCase().includes(query)
            )
            .map(post => ({
                type: 'post',
                ...post
            }))
    );
    
    renderSearchResults(results);
}

/**
 * Render search results
 * @param {Array} results - Array of search results
 */
function renderSearchResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <div class="empty-state-text">No results found</div>
            </div>
        `;
        return;
    }
    
    searchResults.innerHTML = '';
    
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'search-result-item';
        
        if (result.type === 'user') {
            resultElement.innerHTML = `
                <img src="${result.userPic}" alt="${result.username}" class="search-result-pic">
                <div class="search-result-info">
                    <div class="search-result-name">👤 ${result.username}</div>
                    <div class="search-result-meta">${result.bio}</div>
                </div>
            `;
            const handleClick = (e) => {
                e.stopPropagation();
                viewUserPosts(result.username);
            };
            resultElement.addEventListener('click', handleClick);
            resultElement.addEventListener('touchend', handleClick);
        } else if (result.type === 'hashtag') {
            resultElement.innerHTML = `
                <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #00d4ff, #ff1493); border-radius: 50%; font-size: 24px;">📌</div>
                <div class="search-result-info">
                    <div class="search-result-name">${result.tag}</div>
                    <div class="search-result-meta">${result.posts}</div>
                </div>
            `;
            const handleClick = (e) => {
                e.stopPropagation();
                showToast(`🏷️ Viewing posts tagged ${result.tag}`, 'info');
            };
            resultElement.addEventListener('click', handleClick);
            resultElement.addEventListener('touchend', handleClick);
        } else if (result.type === 'post') {
            resultElement.innerHTML = `
                <img src="${result.userPic}" alt="${result.username}" class="search-result-pic">
                <div class="search-result-info">
                    <div class="search-result-name">📸 ${result.username}</div>
                    <div class="search-result-meta">${result.caption.substring(0, 60)}...</div>
                </div>
            `;
            const handleClick = (e) => {
                e.stopPropagation();
                showToast('📸 Viewing full post', 'info');
            };
            resultElement.addEventListener('click', handleClick);
            resultElement.addEventListener('touchend', handleClick);
        }
        
        searchResults.appendChild(resultElement);
    });
}

/**
 * Render trending section
 */
function renderTrendingSection() {
    const trendingList = document.getElementById('trending-list');
    trendingList.innerHTML = '';
    
    app.searchTrending.forEach(trend => {
        const trendItem = document.createElement('div');
        trendItem.className = 'trending-item';
        trendItem.innerHTML = `
            <div class="trending-tag">${trend.tag}</div>
            <div class="trending-count">${trend.posts}</div>
        `;
        const handleClick = (e) => {
            e.stopPropagation();
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = trend.tag;
            }
            performSearch();
        };
        trendItem.addEventListener('click', handleClick);
        trendItem.addEventListener('touchend', handleClick);
        trendingList.appendChild(trendItem);
    });
}

/* ========================================
   6. NOTIFICATIONS FUNCTIONALITY
   ======================================== */

/**
 * Render notifications
 */
function renderNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    notificationsList.innerHTML = '';
    
    if (app.notifications.length === 0) {
        notificationsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔔</div>
                <div class="empty-state-text">No notifications yet</div>
            </div>
        `;
        return;
    }
    
    app.notifications.forEach(notification => {
        const notifElement = document.createElement('div');
        notifElement.className = `notification-item ${notification.type}`;
        
        notifElement.innerHTML = `
            <img src="${notification.userPic}" alt="${notification.username}" class="notification-pic">
            <div class="notification-content">
                <div class="notification-text">
                    <strong>${notification.username}</strong> ${notification.action}
                </div>
                <div class="notification-time">${notification.time}</div>
            </div>
        `;
        
        notifElement.addEventListener('click', () => {
            viewUserPosts(notification.username);
        });
        
        notificationsList.appendChild(notifElement);
    });
}

/**
 * View a specific user's posts and navigate to home
 * @param {string} username - Username to view posts from
 */
function viewUserPosts(username) {
    app.filterByUsername = username;
    navigateToPage('home-page', document.getElementById('nav-home'));
    showToast(`📸 Viewing posts from ${username}`, 'info');
}

/* ========================================
   7. PROFILE FUNCTIONALITY
   ======================================== */

/**
 * Render profile page
 */
function renderProfile() {
    // Update profile picture
    const profilePicImg = document.getElementById('profile-pic-img');
    if (profilePicImg) {
        profilePicImg.src = app.currentUser.profilePic;
    }
    
    // Update profile username and bio
    document.querySelector('.profile-username').textContent = app.currentUser.username;
    document.querySelector('.profile-bio').textContent = app.currentUser.bio;
    
    // Update profile stats
    document.getElementById('profile-posts-count').textContent = app.currentUser.posts.length;
    document.getElementById('profile-followers-count').textContent = app.currentUser.followers.toLocaleString();
    document.getElementById('profile-following-count').textContent = app.currentUser.following.toLocaleString();
    
    // Render profile posts grid
    renderProfilePosts();
}

/**
 * Render profile posts grid
 */
function renderProfilePosts() {
    const profilePostsGrid = document.getElementById('profile-posts');
    profilePostsGrid.innerHTML = '';
    
    // Show posts from the feed that belong to current user
    const userPosts = app.posts.filter(post => post.username === app.currentUser.username);
    
    if (userPosts.length === 0) {
        profilePostsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-state-icon">📸</div>
                <div class="empty-state-text">No posts yet. Create your first post!</div>
            </div>
        `;
        return;
    }
    
    userPosts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'profile-post-item';
        postItem.innerHTML = `
            <img src="${post.image}" alt="Post">
            <div class="profile-post-overlay">
                <div class="profile-post-overlay-text">❤️ ${post.likes} 💬 ${post.commentsList.length}</div>
            </div>
        `;
        postItem.addEventListener('click', () => showToast('📸 Full post view coming soon!', 'info'));
        profilePostsGrid.appendChild(postItem);
    });
}

/* ========================================
   8. TOAST NOTIFICATION SYSTEM
   ======================================== */

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type ('success', 'error', 'info')
 * @param {number} duration - Duration in milliseconds
 */
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

/* ========================================
   9. INITIALIZATION
   ======================================== */

/**
 * Initialize all app functionality
 */
function initApp() {
    // Initialize navigation
    initNavigation();
    
    // Initialize create post functionality
    initCreatePost();
    
    // Initialize search
    initSearch();
    
    // Initialize comment modal
    initCommentModal();
    
    // Initialize edit profile modal
    initEditProfileModal();
    
    // Initialize delete post modal
    initDeletePostModal();
    
    // Initialize post detail modal
    initPostDetailModal();
    
    // Render initial feed
    renderFeed();
    
    // Show welcome toast
    setTimeout(() => {
        showToast('👋 Welcome to SearchConnect!', 'info', 2000);
    }, 500);
}

/**
 * Initialize comment modal functionality
 */
function initCommentModal() {
    const modal = document.getElementById('comment-modal');
    const modalClose = document.getElementById('modal-close');
    const commentSubmitBtn = document.getElementById('comment-submit-btn');
    const commentTextInput = document.getElementById('comment-text-input');
    
    // Close modal button
    if (modalClose) {
        const closeHandler = (e) => {
            e.stopPropagation();
            closeCommentModal();
        };
        modalClose.addEventListener('click', closeHandler);
        modalClose.addEventListener('touchend', closeHandler);
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCommentModal();
            }
        });
    }
    
    // Submit comment
    if (commentSubmitBtn) {
        const submitHandler = (e) => {
            e.stopPropagation();
            addComment();
        };
        commentSubmitBtn.addEventListener('click', submitHandler);
        commentSubmitBtn.addEventListener('touchend', submitHandler);
    }
    
    if (commentTextInput) {
        commentTextInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addComment();
            }
        });
    }
}

/* ========================================
   11. EDIT PROFILE FUNCTIONALITY
   ======================================== */

/**
 * Initialize edit profile modal
 */
function initEditProfileModal() {
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const editProfileClose = document.getElementById('edit-profile-close');
    const saveProfileBtn = document.getElementById('save-profile-btn');
    
    // Open edit profile modal
    if (editProfileBtn) {
        const openHandler = (e) => {
            e.stopPropagation();
            openEditProfileModal();
        };
        editProfileBtn.addEventListener('click', openHandler);
        editProfileBtn.addEventListener('touchend', openHandler);
    }
    
    // Close modal
    if (editProfileClose) {
        const closeHandler = (e) => {
            e.stopPropagation();
            closeEditProfileModal();
        };
        editProfileClose.addEventListener('click', closeHandler);
        editProfileClose.addEventListener('touchend', closeHandler);
    }
    
    // Close on outside click
    if (editProfileModal) {
        editProfileModal.addEventListener('click', (e) => {
            if (e.target === editProfileModal) {
                closeEditProfileModal();
            }
        });
    }
    
    // Save profile
    if (saveProfileBtn) {
        const saveHandler = (e) => {
            e.stopPropagation();
            saveProfileChanges();
        };
        saveProfileBtn.addEventListener('click', saveHandler);
        saveProfileBtn.addEventListener('touchend', saveHandler);
    }
    
    // Profile picture upload functionality
    const profilePicUploadArea = document.getElementById('profile-pic-upload-area');
    const profilePicInput = document.getElementById('profile-pic-input');
    const profilePicPreview = document.getElementById('profile-pic-preview');
    const profilePicPlaceholder = document.getElementById('profile-pic-placeholder');
    
    if (profilePicUploadArea && profilePicInput) {
        // Click upload area to open file picker
        const uploadHandler = (e) => {
            e.stopPropagation();
            profilePicInput.click();
        };
        profilePicUploadArea.addEventListener('click', uploadHandler);
        profilePicUploadArea.addEventListener('touchend', uploadHandler);
        
        // Handle file selection
        profilePicInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    // Store the data URL in the current user profile
                    app.currentUser.profilePic = event.target.result;
                    
                    // Show preview
                    if (profilePicPreview) {
                        profilePicPreview.src = event.target.result;
                        profilePicPreview.style.display = 'block';
                    }
                    
                    if (profilePicPlaceholder) {
                        profilePicPlaceholder.style.display = 'none';
                    }
                    
                    showToast('📸 Photo selected! Tap Save to update your profile.', 'info');
                };
                reader.readAsDataURL(file);
            } else {
                showToast('⚠️ Please select a valid image file!', 'error');
            }
        });
    }
}

/**
 * Open edit profile modal
 */
function openEditProfileModal() {
    const editProfileModal = document.getElementById('edit-profile-modal');
    const editUsername = document.getElementById('edit-username');
    const editBio = document.getElementById('edit-bio');
    const profilePicPreview = document.getElementById('profile-pic-preview');
    const profilePicPlaceholder = document.getElementById('profile-pic-placeholder');
    
    // Fill current values
    editUsername.value = app.currentUser.username;
    editBio.value = app.currentUser.bio;
    
    // Reset profile picture preview
    if (app.currentUser.profilePic && app.currentUser.profilePic.startsWith('data:')) {
        if (profilePicPreview) {
            profilePicPreview.src = app.currentUser.profilePic;
            profilePicPreview.style.display = 'block';
        }
        if (profilePicPlaceholder) {
            profilePicPlaceholder.style.display = 'none';
        }
    } else {
        if (profilePicPreview) {
            profilePicPreview.style.display = 'none';
        }
        if (profilePicPlaceholder) {
            profilePicPlaceholder.style.display = 'flex';
        }
    }
    
    editProfileModal.classList.add('show');
}

/**
 * Close edit profile modal
 */
function closeEditProfileModal() {
    const editProfileModal = document.getElementById('edit-profile-modal');
    editProfileModal.classList.remove('show');
}

/**
 * Save profile changes
 */
function saveProfileChanges() {
    const editUsername = document.getElementById('edit-username');
    const editBio = document.getElementById('edit-bio');
    
    const newUsername = editUsername.value.trim();
    const newBio = editBio.value.trim();
    
    if (!newUsername) {
        showToast('⚠️ Username cannot be empty!', 'error');
        return;
    }
    
    // Update current user
    app.currentUser.username = newUsername;
    app.currentUser.bio = newBio;
    
    // Update profile page display
    document.querySelector('.profile-username').textContent = newUsername;
    document.querySelector('.profile-bio').textContent = newBio;
    
    // Update profile picture if it was changed
    const profilePicImg = document.getElementById('profile-pic-img');
    if (profilePicImg && app.currentUser.profilePic) {
        profilePicImg.src = app.currentUser.profilePic;
    }
    
    // Close modal
    closeEditProfileModal();
    
    showToast('✅ Profile updated successfully!', 'success');
}

/* ========================================
   12. DELETE POST FUNCTIONALITY
   ======================================== */

/**
 * Initialize delete post modal
 */
function initDeletePostModal() {
    const deletePostModal = document.getElementById('delete-post-modal');
    const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
    
    // Cancel delete
    if (cancelDeleteBtn) {
        const cancelHandler = (e) => {
            e.stopPropagation();
            closeDeletePostModal();
        };
        cancelDeleteBtn.addEventListener('click', cancelHandler);
        cancelDeleteBtn.addEventListener('touchend', cancelHandler);
    }
    
    // Close on outside click
    if (deletePostModal) {
        deletePostModal.addEventListener('click', (e) => {
            if (e.target === deletePostModal) {
                closeDeletePostModal();
            }
        });
    }
    
    // Confirm delete
    if (confirmDeleteBtn) {
        const confirmHandler = (e) => {
            e.stopPropagation();
            confirmDeletePost();
        };
        confirmDeleteBtn.addEventListener('click', confirmHandler);
        confirmDeleteBtn.addEventListener('touchend', confirmHandler);
    }
}

/**
 * Open delete post confirmation modal
 * @param {Object} post - Post to delete
 */
function openDeletePostModal(post) {
    app.currentDeletePostId = post.id;
    const deletePostModal = document.getElementById('delete-post-modal');
    deletePostModal.classList.add('show');
}

/**
 * Close delete post modal
 */
function closeDeletePostModal() {
    const deletePostModal = document.getElementById('delete-post-modal');
    deletePostModal.classList.remove('show');
    app.currentDeletePostId = null;
}

/**
 * Confirm and delete post
 */
function confirmDeletePost() {
    if (!app.currentDeletePostId) return;
    
    // Find and remove post
    const postIndex = app.posts.findIndex(p => p.id === app.currentDeletePostId);
    if (postIndex !== -1) {
        const deletedPost = app.posts[postIndex];
        app.posts.splice(postIndex, 1);
        
        // Remove from current user posts
        const userPostIndex = app.currentUser.posts.findIndex(p => p.id === app.currentDeletePostId);
        if (userPostIndex !== -1) {
            app.currentUser.posts.splice(userPostIndex, 1);
        }
    }
    
    closeDeletePostModal();
    
    // Refresh feed
    renderFeed();
    
    showToast('🗑️ Post deleted successfully!', 'success');
}

/* ========================================
   13. POST DETAIL MODAL FUNCTIONALITY
   ======================================== */

/**
 * Open post detail modal
 * @param {Object} post - Post object
 */
function openPostDetailModal(post) {
    const modal = document.getElementById('post-detail-modal');
    const container = document.getElementById('post-detail-container');
    
    // Get the current profile picture for the post's user
    let profilePicToUse = post.userPic;
    const isOwnPost = post.username === app.currentUser.username;
    if (isOwnPost) {
        profilePicToUse = app.currentUser.profilePic;
    } else {
        const user = app.users.find(u => u.username === post.username);
        if (user && user.userPic) {
            profilePicToUse = user.userPic;
        }
    }
    
    // Render post detail
    container.innerHTML = `
        <div class="post-detail-card">
            <div class="post-header">
                <img src="${profilePicToUse}" alt="${post.username}" class="post-profile-pic">
                <div class="post-user-info">
                    <div class="post-username">${post.username}</div>
                    <div class="post-timestamp">${post.timestamp}</div>
                </div>
                ${isOwnPost ? `<button class="delete-post-btn" data-post-id="${post.id}">🗑️</button>` : ''}
            </div>
            <img src="${post.image}" alt="Post" class="post-detail-image">
            <div class="post-caption">
                <strong>${post.username}</strong> ${post.caption}
            </div>
            <div class="post-actions">
                <button class="action-btn like-btn ${post.liked ? 'liked' : ''}" data-post-id="${post.id}">
                    <span>${post.liked ? '❤️' : '🤍'}</span>
                    <span>${post.likes}</span>
                </button>
                <button class="action-btn comment-btn" data-post-id="${post.id}">
                    <span>💬</span>
                    <span>${post.commentsList.length}</span>
                </button>
            </div>
            <div class="comments-section" style="padding: var(--spacing-lg); border-top: 1px solid var(--border-color);">
                <h4 style="margin: 0 0 var(--spacing-lg) 0; font-size: 14px;">Comments (${post.commentsList.length})</h4>
                <div class="detail-comments-list">
                    ${post.commentsList.length === 0 ? '<p style="color: var(--text-secondary); font-size: 13px;">No comments yet</p>' : ''}
                    ${post.commentsList.map(comment => `
                        <div class="comment-item" style="margin-bottom: var(--spacing-md);">
                            <img src="${comment.userPic}" alt="${comment.username}" class="comment-profile-pic" style="width: 32px; height: 32px; border-radius: 50%; margin-right: var(--spacing-sm);">
                            <div style="flex: 1;">
                                <div style="font-weight: 600; font-size: 13px; color: var(--text-primary);">${comment.username}</div>
                                <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">${comment.text}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners with touch support
    const likeBtn = container.querySelector('.like-btn');
    const commentBtn = container.querySelector('.comment-btn');
    const deleteBtn = container.querySelector('.delete-post-btn');
    
    if (likeBtn) {
        const handleLikeClick = (e) => {
            e.stopPropagation();
            handleLike(post, likeBtn);
            openPostDetailModal(post); // Refresh modal
        };
        likeBtn.addEventListener('click', handleLikeClick);
        likeBtn.addEventListener('touchend', handleLikeClick);
    }
    
    if (commentBtn) {
        const handleCommentClick = (e) => {
            e.stopPropagation();
            handleComment(post);
            closePostDetailModal();
        };
        commentBtn.addEventListener('click', handleCommentClick);
        commentBtn.addEventListener('touchend', handleCommentClick);
    }
    
    if (deleteBtn) {
        const handleDeleteClick = (e) => {
            e.stopPropagation();
            openDeletePostModal(post);
            closePostDetailModal();
        };
        deleteBtn.addEventListener('click', handleDeleteClick);
        deleteBtn.addEventListener('touchend', handleDeleteClick);
    }
    
    modal.classList.add('show');
}

/**
 * Close post detail modal
 */
function closePostDetailModal() {
    const modal = document.getElementById('post-detail-modal');
    modal.classList.remove('show');
}

/**
 * Initialize post detail modal
 */
function initPostDetailModal() {
    const modal = document.getElementById('post-detail-modal');
    const closeBtn = document.getElementById('post-detail-close');
    
    if (closeBtn) {
        const closeHandler = (e) => {
            e.stopPropagation();
            closePostDetailModal();
        };
        closeBtn.addEventListener('click', closeHandler);
        closeBtn.addEventListener('touchend', closeHandler);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePostDetailModal();
            }
        });
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

/* ========================================
   10. UTILITY FUNCTIONS
   ======================================== */

/**
 * Format large numbers (e.g., 1000 -> 1K)
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

/**
 * Debounce function for search
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format timestamp (e.g., "2 hours ago")
 * @param {Date} date - Date object
 * @returns {string} - Formatted timestamp
 */
function formatTimestamp(date) {
    const now = new Date();
    const diff = now - date;
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'just now';
}

/* ========================================
   ADDITIONAL FEATURES & ANDROID OPTIMIZATION
   ======================================== */

// Prevent double tap zoom on buttons (Android optimization)
document.addEventListener('touchend', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        e.preventDefault();
    }
}, false);

// Handle back button navigation
let lastPage = 'home-page';
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
        navigateToPage(e.state.page, document.querySelector(`[data-page="${e.state.page}"]`));
    }
});

// Android optimization: Add touch feedback to interactive elements
document.addEventListener('touchstart', (e) => {
    if (e.target.classList && e.target.classList.contains('action-btn')) {
        e.target.style.opacity = '0.7';
    }
}, false);

document.addEventListener('touchend', (e) => {
    if (e.target.classList && e.target.classList.contains('action-btn')) {
        e.target.style.opacity = '1';
    }
}, false);

// Prevent viewport zoom on form inputs (Android)
document.addEventListener('touchmove', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        // Allow normal behavior for inputs
        return;
    }
}, { passive: true });

// Log app state for debugging (can be removed in production)
window.getAppState = () => app;
