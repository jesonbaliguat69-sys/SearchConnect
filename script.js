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
        username: 'Ava Johnson',
        bio: '📱 Tech enthusiast | 🌍 Digital explorer | 💡 Always learning',
        profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        followers: 2450,
        following: 1230,
        posts: [
            {
                id: 4,
                username: 'Ava Johnson',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
                caption: 'Mountain hiking adventure with friends 🏔️ Feeling alive! #Adventure #Nature #Hiking',
                likes: 423,
                commentsList: [
                    { username: 'Sarah Chen', text: 'Looks amazing! 🏔️', userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
                    { username: 'Lisa Fashion', text: 'Wish I was there!', userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
                    { username: 'Marcus Tech', text: 'Great shot!', userPic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' }
                ]
            }
        ]
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
                { username: 'Ava Johnson', text: 'Which one is your favorite?', userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' }
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
            username: 'Ava Johnson',
            userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
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
        },
        {
            id: 6,
            username: 'Nina Patel',
            userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=500&fit=crop',
            caption: 'Coffee, code, and calm mornings ☕💻 #MorningVibes #Productivity #TechLife',
            likes: 198,
            liked: false,
            commentsList: [
                { username: 'Ava Johnson', text: 'Such a clean setup!', userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' }
            ],
            timestamp: '2 days ago'
        },
        {
            id: 7,
            username: 'Chloe Rivers',
            userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=500&fit=crop',
            caption: 'City lights and golden hour walks 🌆✨ #CityLife #StreetStyle #NightMood',
            likes: 256,
            liked: false,
            commentsList: [],
            timestamp: '2 days ago'
        },
        {
            id: 8,
            username: 'Maya Brooks',
            userPic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop',
            caption: 'Weekend self-care reset 🫶🌿 #SelfCare #Wellness #WeekendMood',
            likes: 319,
            liked: false,
            commentsList: [
                { username: 'Lisa Fashion', text: 'Love the vibe!', userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
                { username: 'Emma Design', text: 'So peaceful ✨', userPic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' }
            ],
            timestamp: '3 days ago'
        },
        {
            id: 9,
            username: 'Ava Johnson',
            userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop',
            caption: 'New post from my studio desk today ✨ Keeping it simple and productive. #SearchConnect #StudyMode #NewPost',
            likes: 176,
            liked: false,
            commentsList: [
                { username: 'Nina Patel', text: 'Love the clean setup!', userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' }
            ],
            timestamp: 'just now'
        }
    ],
    
    currentCommentPostId: null,
    currentDeletePostId: null,
    currentDetailPostId: null,
    currentDetailImageIndex: 0,
    currentCreateImages: [],

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
        { id: 5, username: 'John Developer', userPic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', bio: 'Full Stack Developer' },
        { id: 6, username: 'Nina Patel', userPic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', bio: 'Product Designer' },
        { id: 7, username: 'Chloe Rivers', userPic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', bio: 'City Photographer' },
        { id: 8, username: 'Maya Brooks', userPic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', bio: 'Wellness & Lifestyle' }
    ],
    
    // Filter state
    filterByUsername: null,
    filterByHashtag: null,
    filterByCaption: null
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
                app.filterByHashtag = null;
                app.filterByCaption = null;
            }
            
            navigateToPage(pageId, button);
        };
        
        button.addEventListener('click', handleNav);
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
    } else if (app.filterByHashtag) {
        const hashtag = app.filterByHashtag.toLowerCase();
        const hashtagMatches = app.posts.filter(post => post.caption.toLowerCase().includes(hashtag));
        postsToShow = hashtagMatches.length > 0 ? hashtagMatches : app.posts;
    } else if (app.filterByCaption) {
        const captionQuery = app.filterByCaption.toLowerCase();
        const captionMatches = app.posts.filter(post => post.caption.toLowerCase().includes(captionQuery));
        postsToShow = captionMatches.length > 0 ? captionMatches : app.posts;
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
        
        <!-- Post Images -->
        ${renderPostMedia(post, 'feed')}
        
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
    
    // Attach event listeners for tap-friendly mobile behavior
    const likeBtn = postCard.querySelector('.like-btn');
    const commentBtn = postCard.querySelector('.comment-btn');
    const deleteBtn = postCard.querySelector('.delete-post-btn');
    const postMedia = postCard.querySelector('.post-media');
    
    if (likeBtn) {
        const handleLikeClick = (e) => {
            e.stopPropagation();
            handleLike(post, likeBtn);
        };
        likeBtn.addEventListener('click', handleLikeClick);
    }
    
    if (commentBtn) {
        const handleCommentClick = (e) => {
            e.stopPropagation();
            handleComment(post);
        };
        commentBtn.addEventListener('click', handleCommentClick);
    }
    
    if (deleteBtn) {
        const handleDeleteClick = (e) => {
            e.stopPropagation();
            openDeletePostModal(post);
        };
        deleteBtn.addEventListener('click', handleDeleteClick);
    }

    enhanceOwnPostActions(postCard, post);
    
    if (postMedia) {
        postMedia.addEventListener('click', (e) => {
            e.stopPropagation();
            const mediaItem = e.target.closest('.post-media-item');
            const startIndex = mediaItem ? Number(mediaItem.dataset.index || 0) : 0;
            openPostDetailModal(post, startIndex);
        });
    }
    
    return postCard;
}

/**
 * Get every image attached to a post
 * @param {Object} post - Post object
 * @returns {string[]} - Post image URLs
 */
function getPostImages(post) {
    if (Array.isArray(post.images) && post.images.length > 0) {
        return post.images;
    }

    if (post.image) {
        return [post.image];
    }

    return [];
}

/**
 * Render post images for the feed or detail modal
 * @param {Object} post - Post object
 * @param {string} variant - Render variant
 * @returns {string} - Media markup
 */
function renderPostMedia(post, variant) {
    const images = getPostImages(post);
    const imageCount = images.length;

    if (imageCount === 0) {
        return '';
    }

    if (variant === 'detail') {
        return renderPostDetailMedia(post, app.currentDetailImageIndex || 0);
    }

    const mediaClass = 'post-media feed';
    const gridClass = imageCount === 1 ? 'single' : imageCount === 2 ? 'two' : imageCount === 3 ? 'three' : 'four';
    const visibleImages = imageCount > 4 ? images.slice(0, 4) : images;

    const imageMarkup = visibleImages.map((imageSrc, index) => {
        const isLastVisible = index === visibleImages.length - 1;
        const hiddenImageCount = imageCount - visibleImages.length;
        const showMoreOverlay = hiddenImageCount > 0 && isLastVisible;

        return `
            <div class="post-media-item ${showMoreOverlay ? 'has-more' : ''}" data-index="${index}">
                <img src="${imageSrc}" alt="Post image ${index + 1}" class="${variant === 'detail' ? 'post-detail-image' : 'post-image'}">
                ${showMoreOverlay ? `<div class="post-media-more">+${hiddenImageCount}</div>` : ''}
            </div>
        `;
    }).join('');

    return `
        <div class="${mediaClass} ${gridClass}" data-image-count="${imageCount}">
            ${imageMarkup}
        </div>
    `;
}

/**
 * Render the detail modal media
 * @param {Object} post - Post object
 * @param {number} startIndex - Starting image index
 * @returns {string} - Detail media markup
 */
function renderPostDetailMedia(post, startIndex) {
    const images = getPostImages(post);

    if (images.length <= 1) {
        const singleImage = images[0] || post.image;
        return `<img src="${singleImage}" alt="Post" class="post-detail-image">`;
    }

    const safeStartIndex = Math.min(Math.max(startIndex, 0), images.length - 1);
    const slideMarkup = images.map((imageSrc, index) => `
        <div class="post-detail-slide" data-index="${index}">
            <img src="${imageSrc}" alt="Post image ${index + 1}" class="post-detail-image">
        </div>
    `).join('');

    const dotsMarkup = images.map((_, index) => `
        <button type="button" class="post-gallery-dot ${index === safeStartIndex ? 'active' : ''}" data-index="${index}" aria-label="View image ${index + 1}"></button>
    `).join('');

    return `
        <div class="post-detail-gallery" data-count="${images.length}" data-index="${safeStartIndex}">
            <div class="post-detail-track" style="transform: translateX(-${safeStartIndex * 100}%);">
                ${slideMarkup}
            </div>
            <button type="button" class="post-gallery-nav prev" aria-label="Previous image">&lt;</button>
            <button type="button" class="post-gallery-nav next" aria-label="Next image">&gt;</button>
            <div class="post-gallery-dots">${dotsMarkup}</div>
        </div>
    `;
}

/**
 * Bind swipe and navigation controls for multi-image detail galleries
 * @param {HTMLElement} container - Detail modal container
 * @param {Object} post - Post object
 */
function bindDetailGallery(container, post) {
    const images = getPostImages(post);
    if (images.length <= 1) {
        return;
    }

    const gallery = container.querySelector('.post-detail-gallery');
    const track = container.querySelector('.post-detail-track');
    const prevBtn = container.querySelector('.post-gallery-nav.prev');
    const nextBtn = container.querySelector('.post-gallery-nav.next');
    const dots = Array.from(container.querySelectorAll('.post-gallery-dot'));
    let touchStartX = 0;
    let touchEndX = 0;

    const updateGallery = (nextIndex) => {
        const boundedIndex = Math.max(0, Math.min(nextIndex, images.length - 1));
        app.currentDetailImageIndex = boundedIndex;
        gallery.dataset.index = boundedIndex;
        track.style.transform = `translateX(-${boundedIndex * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === boundedIndex);
        });

        prevBtn.disabled = boundedIndex === 0;
        nextBtn.disabled = boundedIndex === images.length - 1;
    };

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateGallery(app.currentDetailImageIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateGallery(app.currentDetailImageIndex + 1);
    });

    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            updateGallery(Number(dot.dataset.index));
        });
    });

    gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    gallery.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchStartX - touchEndX;

        if (Math.abs(swipeDistance) < 40) {
            return;
        }

        if (swipeDistance > 0) {
            updateGallery(app.currentDetailImageIndex + 1);
            return;
        }

        updateGallery(app.currentDetailImageIndex - 1);
    }, { passive: true });

    updateGallery(app.currentDetailImageIndex);
}

/**
 * Upgrade the existing delete button into a three-dot post menu
 * @param {HTMLElement} scopeElement - Post card or modal container
 * @param {Object} post - Post data object
 */
function enhanceOwnPostActions(scopeElement, post) {
    const optionsButton = scopeElement.querySelector('.delete-post-btn');
    if (!optionsButton || optionsButton.dataset.optionsUpgraded === 'true') return;

    optionsButton.dataset.optionsUpgraded = 'true';
    optionsButton.classList.remove('delete-post-btn');
    optionsButton.classList.add('post-options-btn');
    optionsButton.textContent = '⋯';
    optionsButton.setAttribute('aria-label', 'Post options');
    optionsButton.setAttribute('aria-expanded', 'false');

    const optionsWrapper = document.createElement('div');
    optionsWrapper.className = 'post-options-wrapper';
    optionsButton.parentNode.insertBefore(optionsWrapper, optionsButton);
    optionsWrapper.appendChild(optionsButton);

    const optionsMenu = document.createElement('div');
    optionsMenu.className = 'post-options-menu';
    optionsMenu.setAttribute('role', 'menu');
    optionsMenu.innerHTML = `
        <button type="button" class="post-options-item" data-action="view">View post</button>
        <button type="button" class="post-options-item" data-action="copy">Copy caption</button>
        <button type="button" class="post-options-item" data-action="edit">Edit post</button>
        <button type="button" class="post-options-item danger" data-action="delete">Delete post</button>
    `;
    optionsWrapper.appendChild(optionsMenu);

    optionsButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        togglePostOptionsMenu(optionsMenu, optionsButton);
    }, true);

    optionsMenu.addEventListener('click', (e) => {
        const actionButton = e.target.closest('.post-options-item');
        if (!actionButton) return;

        e.stopPropagation();
        handlePostOptionAction(actionButton.dataset.action, post);
    });
}

/**
 * Toggle a post options menu
 * @param {HTMLElement} menu - Menu element
 * @param {HTMLElement} button - Trigger button
 */
function togglePostOptionsMenu(menu, button) {
    const isOpen = menu.classList.contains('show');
    closeAllPostOptionsMenus();

    if (!isOpen) {
        menu.classList.add('show');
        button.setAttribute('aria-expanded', 'true');
    }
}

/**
 * Close all open post option menus
 */
function closeAllPostOptionsMenus() {
    document.querySelectorAll('.post-options-menu.show').forEach(menu => {
        menu.classList.remove('show');
    });

    document.querySelectorAll('.post-options-btn[aria-expanded="true"]').forEach(button => {
        button.setAttribute('aria-expanded', 'false');
    });
}

/**
 * Handle a post menu action
 * @param {string} action - Selected action name
 * @param {Object} post - Post data object
 */
function handlePostOptionAction(action, post) {
    closeAllPostOptionsMenus();

    switch (action) {
        case 'view':
            openPostDetailModal(post);
            break;
        case 'copy':
            copyPostCaption(post);
            break;
        case 'edit':
            editPostCaption(post);
            break;
        case 'delete':
            closePostDetailModal();
            openDeletePostModal(post);
            break;
        default:
            break;
    }
}

/**
 * Copy a post caption to the clipboard
 * @param {Object} post - Post data object
 */
function copyPostCaption(post) {
    const captionText = `${post.username}: ${post.caption}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(captionText)
            .then(() => showToast('✅ Caption copied to clipboard!', 'success'))
            .catch(() => showToast('⚠️ Could not copy caption.', 'error'));
        return;
    }

    const tempInput = document.createElement('textarea');
    tempInput.value = captionText;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        document.execCommand('copy');
        showToast('✅ Caption copied to clipboard!', 'success');
    } catch (error) {
        showToast('⚠️ Could not copy caption.', 'error');
    }

    document.body.removeChild(tempInput);
}

/**
 * Update a post in every local collection that stores it
 * @param {number} postId - Post identifier
 * @param {Function} updater - Function that mutates the matched post
 */
function updatePostById(postId, updater) {
    app.posts.forEach(post => {
        if (post.id === postId) {
            updater(post);
        }
    });

    app.currentUser.posts.forEach(post => {
        if (post.id === postId) {
            updater(post);
        }
    });
}

/**
 * Find a post by id
 * @param {number} postId - Post identifier
 * @returns {Object|null} - The matching post or null
 */
function findPostById(postId) {
    return app.posts.find(post => post.id === postId) || app.currentUser.posts.find(post => post.id === postId) || null;
}

/**
 * Edit a post caption
 * @param {Object} post - Post data object
 */
function editPostCaption(post) {
    const updatedCaption = prompt('Edit your post caption:', post.caption);
    if (updatedCaption === null) return;

    const trimmedCaption = updatedCaption.trim();
    if (!trimmedCaption) {
        showToast('⚠️ Caption cannot be empty.', 'error');
        return;
    }

    updatePostById(post.id, (targetPost) => {
        targetPost.caption = trimmedCaption;
    });

    renderFeed();

    if (document.getElementById('profile-page').classList.contains('active')) {
        renderProfile();
    }

    if (app.currentDetailPostId === post.id) {
        const updatedPost = findPostById(post.id);
        if (updatedPost) {
            openPostDetailModal(updatedPost, app.currentDetailImageIndex);
        }
    }

    showToast('✏️ Post updated successfully!', 'success');
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
    const imagePreviewGrid = document.getElementById('image-preview-grid');
    const uploadPlaceholder = document.getElementById('upload-placeholder');
    const captionInput = document.getElementById('caption-input');
    const charCount = document.getElementById('char-count');
    const createPostBtn = document.getElementById('create-post-btn');
    
    // Image upload handling for mobile taps
    const uploadHandler = (e) => {
        e.stopPropagation();
        imageInput.click();
    };
    imageUploadArea.addEventListener('click', uploadHandler);
    
    imageInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files || []).filter(file => file.type.startsWith('image/'));
        if (files.length === 0) {
            return;
        }

        const readers = files.map(file => new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.readAsDataURL(file);
        }));

        Promise.all(readers).then((images) => {
            app.currentCreateImages = images;
            renderCreateImagePreview(imageUploadArea, imagePreviewGrid, uploadPlaceholder);
        });
    });
    
    // Character counter
    captionInput.addEventListener('input', (e) => {
        charCount.textContent = e.target.value.length;
    });
    
    // Create post button for mobile taps
    if (createPostBtn) {
        const createHandler = (e) => {
            e.stopPropagation();
            const caption = captionInput.value.trim();
            
            if (app.currentCreateImages.length === 0) {
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
                image: app.currentCreateImages[0],
                images: [...app.currentCreateImages],
                caption: caption,
            likes: 0,
            liked: false,
            commentsList: [],
            timestamp: 'just now'
        };
        
        // Add to posts array
        app.posts.unshift(newPost);
        app.currentUser.posts.push(newPost);
        
        resetCreatePostForm(imageUploadArea, imagePreviewGrid, uploadPlaceholder, captionInput, charCount, imageInput);
        
        showToast('✨ Post created successfully!', 'success');
        
        // Navigate to home to show new post
        navigateToPage('home-page', document.getElementById('nav-home'));
        };
        
        createPostBtn.addEventListener('click', createHandler);
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
        const imagePreviewGrid = document.getElementById('image-preview-grid');
        const uploadPlaceholder = document.getElementById('upload-placeholder');
        
        app.currentCreateImages = [];
        imagePreviewGrid.innerHTML = '';
        imagePreviewGrid.style.display = 'none';
        uploadPlaceholder.style.display = 'flex';
        imageUploadArea.classList.remove('has-image');
        imageInput.value = '';
        removeBtn.remove();
    });
    
    imageUploadArea.appendChild(removeBtn);
}

/**
 * Render the create-post preview grid
 * @param {HTMLElement} imageUploadArea - Upload area element
 * @param {HTMLElement} imagePreviewGrid - Preview grid element
 * @param {HTMLElement} uploadPlaceholder - Placeholder element
 */
function renderCreateImagePreview(imageUploadArea, imagePreviewGrid, uploadPlaceholder) {
    imagePreviewGrid.innerHTML = '';

    app.currentCreateImages.forEach((imageSrc, index) => {
        const previewItem = document.createElement('div');
        previewItem.className = 'image-preview-item';
        previewItem.innerHTML = `<img src="${imageSrc}" alt="Selected image ${index + 1}" class="image-preview-thumb">`;
        imagePreviewGrid.appendChild(previewItem);
    });

    imagePreviewGrid.style.display = 'grid';
    uploadPlaceholder.style.display = 'none';
    imageUploadArea.classList.add('has-image');
    addRemoveImageButton(imageUploadArea);
}

/**
 * Reset the create-post form
 * @param {HTMLElement} imageUploadArea - Upload area element
 * @param {HTMLElement} imagePreviewGrid - Preview grid element
 * @param {HTMLElement} uploadPlaceholder - Placeholder element
 * @param {HTMLElement} captionInput - Caption input
 * @param {HTMLElement} charCount - Character counter
 * @param {HTMLElement} imageInput - File input
 */
function resetCreatePostForm(imageUploadArea, imagePreviewGrid, uploadPlaceholder, captionInput, charCount, imageInput) {
    app.currentCreateImages = [];
    imagePreviewGrid.innerHTML = '';
    imagePreviewGrid.style.display = 'none';
    uploadPlaceholder.style.display = 'flex';
    imageUploadArea.classList.remove('has-image');
    captionInput.value = '';
    charCount.textContent = '0';
    imageInput.value = '';

    const removeBtn = imageUploadArea.querySelector('.remove-image-btn');
    if (removeBtn) {
        removeBtn.remove();
    }
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
    const captionMatches = app.posts.filter(post =>
        post.caption.toLowerCase().includes(query)
    );
    
    if (!query) {
        app.filterByCaption = null;
        return;
    }

    if (captionMatches.length > 0) {
        app.filterByUsername = null;
        app.filterByHashtag = null;
        app.filterByCaption = query;
        navigateToPage('home-page', document.getElementById('nav-home'));
        showToast(`🔎 Showing posts for "${query}"`, 'info');
        return;
    }

    const searchResults = document.getElementById('search-results');
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

    if (searchResults) {
        renderSearchResults(results);
    }
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
                showHashtagPosts(result.tag);
            };
            resultElement.addEventListener('click', handleClick);
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
            showHashtagPosts(trend.tag);
        };
        trendItem.addEventListener('click', handleClick);
        trendingList.appendChild(trendItem);
    });
}

/**
 * Show hashtag results in the home feed
 * @param {string} tag - Hashtag tag
 */
function showHashtagPosts(tag) {
    app.filterByUsername = null;
    app.filterByHashtag = tag;
    app.filterByCaption = null;
    navigateToPage('home-page', document.getElementById('nav-home'));
    showToast(`🏷️ Showing posts for ${tag}`, 'info');
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
    app.filterByHashtag = null;
    app.filterByCaption = null;
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
        const postImages = getPostImages(post);
        const postItem = document.createElement('div');
        postItem.className = 'profile-post-item';
        postItem.innerHTML = `
            <img src="${postImages[0]}" alt="Post">
            <div class="profile-post-overlay">
                <div class="profile-post-overlay-text">❤️ ${post.likes} 💬 ${post.commentsList.length}</div>
            </div>
        `;
        postItem.addEventListener('click', () => openPostDetailModal(post));
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

    document.addEventListener('click', closeAllPostOptionsMenus);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllPostOptionsMenus();
        }
    });
    
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
    }
    
    // Close modal
    if (editProfileClose) {
        const closeHandler = (e) => {
            e.stopPropagation();
            closeEditProfileModal();
        };
        editProfileClose.addEventListener('click', closeHandler);
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
    }
}

/**
 * Open delete post confirmation modal
 * @param {Object} post - Post to delete
 */
function openDeletePostModal(post) {
    app.currentDeletePostId = post.id;
    closeAllPostOptionsMenus();
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
    if (document.getElementById('profile-page').classList.contains('active')) {
        renderProfile();
    }
    
    showToast('🗑️ Post deleted successfully!', 'success');
}

/* ========================================
   13. POST DETAIL MODAL FUNCTIONALITY
   ======================================== */

/**
 * Open post detail modal
 * @param {Object} post - Post object
 */
function openPostDetailModal(post, startIndex = 0) {
    const modal = document.getElementById('post-detail-modal');
    const container = document.getElementById('post-detail-container');
    app.currentDetailPostId = post.id;
    app.currentDetailImageIndex = startIndex;
    closeAllPostOptionsMenus();
    
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
            ${renderPostMedia(post, 'detail')}
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
    
    // Add event listeners for the post detail modal
    const likeBtn = container.querySelector('.like-btn');
    const commentBtn = container.querySelector('.comment-btn');
    const deleteBtn = container.querySelector('.delete-post-btn');
    
    if (likeBtn) {
        const handleLikeClick = (e) => {
            e.stopPropagation();
            handleLike(post, likeBtn);
            openPostDetailModal(post, app.currentDetailImageIndex);
        };
        likeBtn.addEventListener('click', handleLikeClick);
    }
    
    if (commentBtn) {
        const handleCommentClick = (e) => {
            e.stopPropagation();
            handleComment(post);
            closePostDetailModal();
        };
        commentBtn.addEventListener('click', handleCommentClick);
    }
    
    if (deleteBtn) {
        const handleDeleteClick = (e) => {
            e.stopPropagation();
            openDeletePostModal(post);
            closePostDetailModal();
        };
        deleteBtn.addEventListener('click', handleDeleteClick);
    }

    bindDetailGallery(container, post);
    enhanceOwnPostActions(container, post);
    
    modal.classList.add('show');
}

/**
 * Close post detail modal
 */
function closePostDetailModal() {
    const modal = document.getElementById('post-detail-modal');
    modal.classList.remove('show');
    app.currentDetailPostId = null;
    app.currentDetailImageIndex = 0;
    closeAllPostOptionsMenus();
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

// Handle back button navigation
let lastPage = 'home-page';
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
        navigateToPage(e.state.page, document.querySelector(`[data-page="${e.state.page}"]`));
    }
});

// Log app state for debugging (can be removed in production)
window.getAppState = () => app;
