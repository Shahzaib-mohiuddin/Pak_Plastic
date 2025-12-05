// Product Detail JavaScript

// Product data
const productData = {
    'plastic-pallet-1': {
        title: 'Plastic Pallet 1',
        description: 'Heavy-duty plastic pallet with 113cm width and 136cm length. Designed for efficient logistics and warehouse operations with superior durability.',
        image: 'images/1.png',
        images: [
            'images/1.png',
            'images/Add a heading(1).png',
            'images/Untitled design.png',
            'images/Untitled design(4).png'
        ],
        placeholder: '📋',
        specifications: {
            'Material': 'High-Density Polyethylene (HDPE)',
            'Width': '113 cm',
            'Length': '136 cm',
            'Load Capacity': '1500 kg static, 1200 kg dynamic',
            'Weight': '18-22 kg',
            'Temperature Range': '-40°C to +60°C',
            'Entry': '4-way forklift access'
        }
    },
    'plastic-pallet-2': {
        title: 'Plastic Pallet 2',
        description: 'Standard size plastic pallet designed for versatile warehouse and logistics applications. Built with advanced injection molding technology.',
        image: 'images/Add a heading.png',
        images: [
            'images/Add a heading.png',
            'images/Add a heading(1).png',
            'images/Untitled design.png',
            'images/Untitled design(3).png'
        ],
        placeholder: '📦',
        specifications: {
            'Material': 'High-Density Polyethylene (HDPE)',
            'Dimensions': '1200 x 1000 x 150 mm',
            'Load Capacity': '1500 kg static, 1200 kg dynamic',
            'Weight': '18-22 kg',
            'Temperature Range': '-40°C to +60°C',
            'Entry': '4-way forklift access'
        }
    },
    'plastic-pallets': {
        title: 'Standard Plastic Pallet',
        description: 'Heavy-duty, reusable pallets designed for efficient logistics and warehouse operations. Built with advanced Electric Injection Molding technology using 70%+ recycled materials.',
        image: 'images/plastic_pallets.png',
        images: [
            'images/plastic_pallets.png',
            'images/palletside.png',
            'images/palletfront.png'
        ],
        placeholder: '📋',
        specifications: {
            'Material': 'High-Density Polyethylene (HDPE)',
            'Load Capacity': '1500 kg static, 1200 kg dynamic',
            'Dimensions': '1200 x 1000 x 150 mm',
            'Weight': '18-22 kg',
            'Temperature Range': '-40°C to +60°C',
            'Recycled Content': '70%+'
        }
    },
    'plastic-pallets-heavy': {
        title: 'Heavy Duty Plastic Pallet',
        description: 'Extra strong plastic pallets designed for heavy industrial loads and demanding warehouse environments. Enhanced reinforcement structure for maximum durability.',
        image: 'images/plastic_pallets.png',
        placeholder: '💪',
        features: [
            'Four-way forklift entry design',
            'Non-porous surface prevents contamination',
            'Weather and chemical resistant',
            'Consistent weight and dimensions',
            'No nails, splinters, or loose boards',
            'Made with 70%+ recycled materials'
        ],
        specifications: {
            'Material': 'Reinforced HDPE with Steel Inserts',
            'Load Capacity': '2500 kg static, 2000 kg dynamic',
            'Dimensions': '1200 x 1000 x 180 mm',
            'Weight': '28-32 kg',
            'Temperature Range': '-40°C to +80°C',
            'Recycled Content': '60%+'
        },
        applications: [
            'Food and pharmaceutical industries',
            'Export and shipping operations',
            'Cold storage facilities',
            'Chemical and hazardous materials',
            'Automated warehouse systems'
        ]
    },
    'plastic-pallets-export': {
        title: 'Export Plastic Pallet',
        description: 'International shipping compliant plastic pallets meeting ISPM-15 standards. Lightweight yet durable design for global logistics operations.',
        image: 'images/plastic_pallets.png',
        placeholder: '🌍',
        features: [
            'Four-way forklift entry design',
            'Non-porous surface prevents contamination',
            'Weather and chemical resistant',
            'Consistent weight and dimensions',
            'No nails, splinters, or loose boards',
            'Made with 70%+ recycled materials'
        ],
        specifications: {
            'Material': 'Virgin HDPE (Food Grade)',
            'Load Capacity': '1200 kg static, 1000 kg dynamic',
            'Dimensions': '1200 x 800 x 140 mm',
            'Weight': '15-18 kg',
            'Temperature Range': '-30°C to +70°C',
            'Compliance': 'ISPM-15, FDA Approved',
            'Entry': '4-way forklift access'
        },
        applications: [
            'Food and pharmaceutical industries',
            'Export and shipping operations',
            'Cold storage facilities',
            'Chemical and hazardous materials',
            'Automated warehouse systems'
        ]
    },
    'household': {
        title: 'House Hold Products',
        description: 'Quality household plastic products designed for everyday convenience and organization. Manufactured with food-grade materials and ergonomic designs for modern homes.',
        image: 'images/houshold.png',
        placeholder: '🏠',
        features: [
            'BPA-free food-grade materials',
            'Ergonomic and user-friendly designs',
            'Easy to clean and maintain',
            'Attractive and modern aesthetics',
            'Durable construction for daily use',
            'Stackable and space-saving designs'
        ],
        specifications: {
            'Material': 'Food-grade Polypropylene',
            'Safety': 'BPA-free certified',
            'Temperature Range': '-20°C to +100°C',
            'Colors Available': 'Multiple color options',
            'Certification': 'Food contact approved'
        },
        applications: [
            'Kitchen storage and organization',
            'Bathroom accessories',
            'Living room organizers',
            'Children\'s storage solutions',
            'Laundry and utility rooms'
        ]
    },
    'household-storage': {
        title: 'Storage Containers',
        description: 'Multi-purpose storage solutions for household organization. Stackable, durable, and available in various sizes for different storage needs.',
        image: 'images/houshold.png',
        placeholder: '📦',
        specifications: {
            'Material': 'Food-Grade Polypropylene',
            'Capacity Range': '5L to 50L',
            'Features': 'Stackable, Airtight Seal',
            'Temperature Range': '-20°C to +100°C',
            'Colors': 'Clear, Blue, Green',
            'BPA Free': 'Yes'
        }
    },
    'household-kitchen': {
        title: 'Kitchen Items',
        description: 'Food-grade kitchen products including containers, utensils, and storage solutions. Safe, hygienic, and designed for daily kitchen use.',
        image: 'images/houshold.png',
        placeholder: '🍽️',
        specifications: {
            'Material': 'Food-Grade PP/PE',
            'Dishwasher Safe': 'Yes (Top Rack)',
            'Microwave Safe': 'Selected Items',
            'Temperature Range': '-20°C to +120°C',
            'Certification': 'FDA, EU Food Contact',
            'BPA Free': 'Yes'
        }
    },
    'container-boxes-small': {
        title: 'Small Container Boxes',
        description: 'Compact storage containers perfect for small parts, tools, and office supplies. Ideal for organizing workspaces and storage areas.',
        image: 'images/cantainerbox.png',
        placeholder: '📦',
        specifications: {
            'Material': 'High-density Polyethylene (HDPE)',
            'Capacity': '5L to 20L',
            'Dimensions': '300x200x150mm to 500x350x250mm',
            'Load Capacity': 'Up to 25kg',
            'Color Options': 'Blue, Gray, Green',
            'Temperature Range': '-40°C to +80°C'
        }
    },
    'container-boxes-large': {
        title: 'Large Container Boxes',
        description: 'Industrial-size containers for heavy-duty storage and transportation. Built for demanding commercial and industrial environments.',
        image: 'images/cantainerbox.png',
        placeholder: '📋',
        specifications: {
            'Material': 'Reinforced HDPE',
            'Capacity': '50L to 200L',
            'Dimensions': '600x400x400mm to 1000x600x600mm',
            'Load Capacity': 'Up to 100kg',
            'Color Options': 'Blue, Gray, Red',
            'Temperature Range': '-40°C to +80°C'
        }
    },
    'container-boxes': {
        title: 'Container Boxes',
        description: 'Versatile storage containers designed for industrial and commercial applications. Perfect for organizing, storing, and transporting various materials with maximum efficiency.',
        image: 'images/cantainerbox.png',
        placeholder: '📦',
        features: [
            'Stackable design for space optimization',
            'Reinforced corners and edges',
            'Smooth interior for easy cleaning',
            'Ergonomic handles for safe handling',
            'Chemical and impact resistant',
            'Available in multiple sizes'
        ],
        specifications: {
            'Material': 'High-density Polyethylene (HDPE)',
            'Load Capacity': 'Up to 50kg',
            'Dimensions': 'Multiple sizes available',
            'Color Options': 'Blue, Gray, Green, Red',
            'Temperature Range': '-40°C to +80°C'
        },
        applications: [
            'Industrial parts storage',
            'Warehouse organization',
            'Retail merchandise handling',
            'Food processing facilities',
            'Automotive industry'
        ]
    },
    'big-bins-waste': {
        title: 'Waste Bins',
        description: 'Municipal waste management bins designed for efficient collection and disposal. Built with heavy-duty materials for long-lasting performance.',
        image: 'images/bigbin.png',
        placeholder: '🗂️',
        specifications: {
            'Material': 'UV-stabilized HDPE',
            'Capacity': '120L - 660L',
            'Wheels': 'Heavy-duty rubber wheels',
            'Lid Type': 'Hinged with lock',
            'Colors': 'Green, Gray, Black',
            'UV Protection': 'Yes'
        }
    },
    'big-bins-recycling': {
        title: 'Recycling Bins',
        description: 'Eco-friendly recycling solutions with color-coded design for different waste types. Promoting sustainable waste management practices.',
        image: 'images/bigbin.png',
        placeholder: '♻️',
        specifications: {
            'Material': 'Recycled HDPE',
            'Capacity': '240L - 1100L',
            'Wheels': 'Heavy-duty rubber wheels',
            'Lid Type': 'Color-coded lids',
            'Colors': 'Blue, Yellow, Green, Red',
            'Recycled Content': '80%+'
        }
    },
    'road-barriers-standard': {
        title: 'Standard Road Barriers',
        description: 'Traffic control barriers for general road management and construction sites. Lightweight yet durable design with high visibility features.',
        image: 'images/barrier.png',
        placeholder: '🚧',
        specifications: {
            'Material': 'UV-stabilized Polyethylene',
            'Height': '1000mm',
            'Length': '2000mm',
            'Weight': '15kg',
            'Colors': 'Orange/White',
            'Reflective Strips': 'Yes'
        }
    },
    'road-barriers-heavy': {
        title: 'Heavy Duty Road Barriers',
        description: 'Construction site barriers designed for maximum impact resistance and durability. Enhanced stability for high-traffic areas.',
        image: 'images/barrier.png',
        placeholder: '⚠️',
        specifications: {
            'Material': 'Reinforced HDPE',
            'Height': '1200mm',
            'Length': '2000mm',
            'Weight': '25kg',
            'Colors': 'Orange/White',
            'Base Fill': 'Water/Sand fillable'
        }
    },
    'bottle-caps-standard': {
        title: 'Standard Bottle Caps',
        description: 'Regular bottle caps for beverage industry. Food-grade materials with secure sealing properties for various bottle types.',
        image: 'images/bottlecaps.png',
        placeholder: '🧴',
        specifications: {
            'Material': 'Food-Grade PP',
            'Thread Size': '28mm, 30mm, 38mm',
            'Colors': 'Multiple colors available',
            'Sealing': 'Tamper-evident',
            'Temperature Range': '-20°C to +100°C',
            'FDA Approved': 'Yes'
        }
    },
    'bottle-caps-sports': {
        title: 'Sports Bottle Caps',
        description: 'Pull-push sports caps designed for active lifestyle bottles. Easy-to-use mechanism with leak-proof design.',
        image: 'images/bottlecaps.png',
        placeholder: '⚽',
        specifications: {
            'Material': 'Food-Grade PP/PE',
            'Mechanism': 'Pull-Push',
            'Thread Size': '28mm',
            'Colors': 'Blue, Red, Green, Black',
            'Flow Rate': 'High flow design',
            'BPA Free': 'Yes'
        }
    },
    'bottle-caps-child': {
        title: 'Child-Safe Bottle Caps',
        description: 'Child-resistant caps meeting safety standards for pharmaceutical and household chemical products.',
        image: 'images/bottlecaps.png',
        placeholder: '👶',
        specifications: {
            'Material': 'High-Grade PP',
            'Safety': 'Child-resistant mechanism',
            'Thread Size': '24mm, 28mm, 33mm',
            'Colors': 'White, Blue, Red',
            'Certification': 'ISO 8317 compliant',
            'Tamper Evidence': 'Yes'
        }
    },
    'big-bins': {
        title: 'Big Bins',
        description: 'Large capacity waste bins designed for municipal and industrial waste management. Built to withstand heavy-duty use with weather-resistant properties.',
        image: 'images/bigbin.png',
        placeholder: '🗂️',
        features: [
            'Large capacity for high-volume waste',
            'Heavy-duty wheels for easy mobility',
            'Weather and UV resistant',
            'Tight-fitting lids to contain odors',
            'Easy to clean and sanitize',
            'Reinforced construction'
        ],
        specifications: {
            'Material': 'UV-stabilized HDPE',
            'Capacity': '120L - 1100L',
            'Wheels': 'Heavy-duty rubber wheels',
            'Lid Type': 'Hinged or removable',
            'Colors': 'Green, Blue, Gray, Black'
        },
        applications: [
            'Municipal waste collection',
            'Industrial facilities',
            'Commercial establishments',
            'Residential complexes',
            'Public spaces and parks'
        ]
    },
    'road-barriers': {
        title: 'Road Barriers',
        description: 'Durable traffic safety barriers designed for construction and road management. Built to meet international safety standards with high visibility and impact resistance.',
        image: 'images/barrier.png',
        placeholder: '🚧',
        features: [
            'High visibility orange and white colors',
            'Impact resistant construction',
            'Interlocking system for continuous barriers',
            'UV stabilized for outdoor use',
            'Lightweight yet durable design',
            'Easy to transport and install'
        ],
        specifications: {
            'Material': 'UV-stabilized Polyethylene',
            'Height': '1000mm standard',
            'Length': '2000mm standard',
            'Weight': '12-15kg per unit',
            'Colors': 'Orange, White, Red'
        },
        applications: [
            'Construction site safety',
            'Traffic management and control',
            'Road maintenance operations',
            'Event crowd control',
            'Temporary road diversions'
        ]
    },
    'bottle-caps': {
        title: 'Bottle Caps',
        description: 'Premium quality bottle caps designed for beverage and packaging industries. Manufactured with precision using advanced Electric Injection Molding technology.',
        image: 'images/bottlecaps.png',
        placeholder: '🧴',
        features: [
            'Food-grade certified materials',
            'Tamper-evident security features',
            'Perfect seal and closure',
            'Various sizes and thread types',
            'Custom colors and branding options',
            'High-speed production capability'
        ],
        specifications: {
            'Material': 'Food-grade Polypropylene',
            'Thread Types': 'PCO, ROPP, Screw-on',
            'Sizes': '28mm, 30mm, 38mm, custom',
            'Colors': 'Any color available',
            'Certification': 'FDA approved'
        },
        applications: [
            'Beverage industry (water, soft drinks)',
            'Pharmaceutical packaging',
            'Cosmetic and personal care',
            'Food and condiment packaging',
            'Chemical and industrial liquids'
        ]
    }
};

// Get product ID from URL parameters
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product');
}

// Load product data
function loadProductData() {
    const productId = getProductId();
    const product = productData[productId];
    
    if (!product) {
        // Redirect to products page if product not found
        window.location.href = 'products.html';
        return;
    }
    
    // Update page title
    document.title = `${product.title} - PAK PLASTIC INDUSTRY L.L.C`;
    
    // Update breadcrumb
    document.getElementById('product-breadcrumb').textContent = product.title;
    
    // Update product information
    document.getElementById('product-title').textContent = product.title;
    
    // Update product specifications summary
    if (product.specifications) {
        const dimensions = product.specifications['Dimensions'] || 
            (product.specifications['Width'] && product.specifications['Length'] ? 
                `${product.specifications['Width']} x ${product.specifications['Length']}` : 'N/A');
        const capacity = product.specifications['Load Capacity'] || product.specifications['Capacity'] || 'N/A';
        const material = product.specifications['Material'] || 'N/A';
        
        document.getElementById('product-dimensions').textContent = dimensions;
        document.getElementById('product-capacity').textContent = capacity;
        document.getElementById('product-material').textContent = material;
    }
    
    // Update SKU and Category
    document.getElementById('product-sku').textContent = productId.toUpperCase();
    document.getElementById('product-category').textContent = product.title;
    
    // Load description in tab
    document.getElementById('product-description-content').innerHTML = `<p>${product.description}</p>`;
    
    // Update product image(s)
    const mainImage = document.getElementById('product-main-image');
    const placeholder = document.getElementById('image-placeholder');
    const gallery = document.getElementById('image-gallery');
    
    // Set main image
    mainImage.src = product.image;
    mainImage.alt = product.title;
    placeholder.textContent = product.placeholder;
    
    mainImage.onerror = function() {
        this.style.display = 'none';
        placeholder.style.display = 'flex';
    };
    
    mainImage.onload = function() {
        placeholder.style.display = 'none';
        this.style.display = 'block';
    };
    
    // Handle multiple images if available
    if (product.images && product.images.length > 1) {
        gallery.style.display = 'block';
        loadImageGallery(product.images, product.title, product.placeholder);
    } else {
        gallery.style.display = 'none';
    }
    
    // Load detailed specifications in Additional Information tab
    const detailedSpecs = document.getElementById('detailed-specs');
    if (detailedSpecs) {
        detailedSpecs.innerHTML = '';
        
        if (product.specifications) {
            Object.entries(product.specifications).forEach(([key, value]) => {
                const specRow = document.createElement('div');
                specRow.className = 'spec-row';
                specRow.innerHTML = `
                    <span class="spec-name">${key}</span>
                    <span class="spec-detail">${value}</span>
                `;
                detailedSpecs.appendChild(specRow);
            });
        }
    }
    
    // Initialize tabs
    initializeTabs();
    
    // Load related products
    loadRelatedProducts(productId);
}

// Load related products
function loadRelatedProducts(currentProductId) {
    const relatedGrid = document.getElementById('related-products-grid');
    relatedGrid.innerHTML = '';
    
    // Get 3 random products excluding current one
    const allProducts = Object.keys(productData).filter(id => id !== currentProductId);
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    selected.forEach(productId => {
        const product = productData[productId];
        const card = document.createElement('div');
        card.className = 'related-product-card';
        card.onclick = () => {
            window.location.href = `product-detail.html?product=${productId}`;
        };
        
        card.innerHTML = `
            <div class="related-product-image">
                <img src="${product.image}" alt="${product.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-placeholder" style="display: none; font-size: 3rem;">${product.placeholder}</div>
            </div>
            <div class="related-product-info">
                <h4>${product.title}</h4>
            </div>
        `;
        
        relatedGrid.appendChild(card);
    });
}

// Load image gallery for products with multiple images
function loadImageGallery(images, productTitle, placeholder) {
    const galleryContainer = document.querySelector('.gallery-thumbnails');
    galleryContainer.innerHTML = '';
    
    images.forEach((imageSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        thumbnail.innerHTML = `
            <img src="${imageSrc}" alt="${productTitle} - View ${index + 1}" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="thumbnail-placeholder" style="display: none;">${placeholder}</div>
        `;
        
        // Add click event to change main image
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            const mainImage = document.getElementById('product-main-image');
            const mainPlaceholder = document.getElementById('image-placeholder');
            
            mainImage.src = imageSrc;
            mainImage.alt = `${productTitle} - View ${index + 1}`;
            
            mainImage.onerror = function() {
                this.style.display = 'none';
                mainPlaceholder.style.display = 'flex';
            };
            
            mainImage.onload = function() {
                mainPlaceholder.style.display = 'none';
                this.style.display = 'block';
            };
        });
        
        galleryContainer.appendChild(thumbnail);
    });
}

// Action functions
function requestQuote() {
    const productId = getProductId();
    const product = productData[productId];
    const subject = encodeURIComponent(`Quote Request for ${product.title}`);
    const body = encodeURIComponent(`Hello,\n\nI would like to request a quote for ${product.title}.\n\nPlease provide pricing and availability information.\n\nThank you.`);
    window.location.href = `mailto:sales@pakplasticllc.com?subject=${subject}&body=${body}`;
}

function downloadCatalog() {
    // In a real implementation, this would download the actual catalog
    alert('Catalog download will be available soon. Please contact us for detailed product information.');
}

function goBack() {
    window.location.href = 'products.html';
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProductData();
});

// Handle browser back/forward navigation
window.addEventListener('popstate', function() {
    loadProductData();
});

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            const targetPanel = document.getElementById(`${targetTab}-panel`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Color swatch functionality
document.addEventListener('DOMContentLoaded', function() {
    const colorSwatches = document.querySelectorAll('.color-swatch');
    
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Remove active class from all swatches
            colorSwatches.forEach(s => s.classList.remove('active'));
            // Add active class to clicked swatch
            swatch.classList.add('active');
        });
    });
});
