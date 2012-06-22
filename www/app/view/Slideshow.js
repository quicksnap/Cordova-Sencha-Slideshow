Ext.define('WupDemo.view.Slideshow', {
    extend: 'Ext.carousel.Carousel',
    alias: 'widget.slideshow',

    requires: [
        'WupDemo.util.Timer'
    ],

    config: {
        defaults: {
            styleHtmlContent: true
        },
        cls: 'slideshow',
        // Context of Timer's 'this' is the instance of
        //  WupDemo.util.Slideshow
        items: [
            {
                html : '<div id="wupslide-0"></div>',
                style: {
                    
                },
                cls: 'wupslide',
                getTimers: function(){
                    var timers = [
                        Ext.create('WupDemo.util.Timer', {
                            // How long current timer lasts, in MS
                            startTime: 500,
                            // Whether or not to advance to the next timer/slide
                            autoAdvance: true,
                            // Optional function call on begining of this timer
                            onBegin: function() { 
                                // This is how you'd get a usable ID of current slide
                                // $( this.getCurrentId() ).hide();

                            }
                        }),
                    ];

                    return timers;
                },
            },
            {
                html : '<div id="wupslide-1" class="slide"><div class="slide-inner landscape"></div></div>',
                style: {
                    
                },
                cls: 'wupslide',
                getTimers: function(){
                    var timers = [
                        Ext.create('WupDemo.util.Timer', {
                            // How long current timer lasts, in MS
                            startTime: 12000,
                            // Whether or not to advance to the next timer/slide
                            autoAdvance: true,
                            // Optional function call on begining of this timer
                            onBegin: function() { 
                                // This is how you'd get a usable ID of current slide
                                // $( this.getCurrentId() ).hide();
                               this.playMedia('1.wav');
                            }
                        }),
                    ];

                    return timers;
                },
            },
            {
                html : '<div id="wupslide-2" class="slide"><div class="slide-inner landscape"></div></div>',
                style: {
                    
                },
                cls: 'wupslide',
                getTimers: function(){
                    var timers = [
                        Ext.create('WupDemo.util.Timer', {
                            // How long current timer lasts, in MS
                            startTime: 7500,
                            // Whether or not to advance to the next timer/slide
                            autoAdvance: true,
                            // Optional function call on begining of this timer
                            onBegin: function() { 
                                // This is how you'd get a usable ID of current slide
                                // $( this.getCurrentId() ).hide();
                                this.playMedia('2.wav');
                            }
                        }),
                    ];

                    return timers;
                },
            },
            {
                html : '<div id="wupslide-3" class="slide"><div class="slide-inner landscape"></div></div>',
                style: {
                    
                },
                cls: 'wupslide',
                getTimers: function(){
                    var timers = [
                        Ext.create('WupDemo.util.Timer', {
                            // How long current timer lasts, in MS
                            startTime: 10500,
                            // Whether or not to advance to the next timer/slide
                            autoAdvance: true,
                            // Optional function call on begining of this timer
                            onBegin: function() { 
                                // This is how you'd get a usable ID of current slide
                                // $( this.getCurrentId() ).hide();
                                this.playMedia('3.wav');
                            }
                        }),
                    ];

                    return timers;
                },
            },
            {
                html : '<div id="wupslide-4" class="slide"><div class="slide-inner landscape"></div></div>',
                style: {
                    
                },
                cls: 'wupslide',
                getTimers: function(){
                    var timers = [
                        Ext.create('WupDemo.util.Timer', {
                            // How long current timer lasts, in MS
                            startTime: 7500,
                            // Whether or not to advance to the next timer/slide
                            autoAdvance: true,
                            // Optional function call on begining of this timer
                            onBegin: function() { 
                                // This is how you'd get a usable ID of current slide
                                // $( this.getCurrentId() ).hide();
                                this.playMedia('4.wav');
                            }
                        }),
                    ];

                    return timers;
                },
            },
            {
                html : '<div id="wupslide-5" class="slide"><div class="slide-inner landscape"><img src="images/slides/justinonly.png" id="justin"><img src="images/slides/danonly.png" id="dan"><div class="swipe-next">Swipe the screen to continue.</div></div></div>',
                style: {
                    
                },
                cls: 'wupslide',
                getTimers: function(){
                    var timers = [
                        Ext.create('WupDemo.util.Timer', {
                            // How long current timer lasts, in MS
                            startTime: 1000,
                            // Whether or not to advance to the next timer/slide
                            autoAdvance: false,
                            // Optional function call on begining of this timer
                            onBegin: function() { 
                                // This is how you'd get a usable ID of current slide
                                // $( this.getCurrentId() ).hide();
                                this.playMedia('5.wav');
                                Ext.get('dan').on('tap',function() {
                                    Ext.Msg.alert('About Dan', 'Dan Schuman is an experienced developer and technical project manager with over ten years of experience working with multiple programming languages and software architectures.');
                                });

                                Ext.get('justin').on('tap',function() {
                                    Ext.Msg.alert('About Justin', '<p>Justin Bean is an online marketing expert with experience in B2C, B2B and B2G industries and specialization in internet marketing/e-commerce.</p><p><br/>His management experience including leading cross-functional teams to deliver strategic business solutions through online marketing and web development.</p>');
                                });
                            }
                        }),
                    ];
                    return timers;
                },
            },
            {
                html : '<div id="wupslide-6" class="slide"><div class="slide-inner landscape"></div></div>',
                style: {
                    
                },
                cls: 'wupslide',
                getTimers: function(){
                    var timers = [
                        Ext.create('WupDemo.util.Timer', {
                            // How long current timer lasts, in MS
                            startTime: 10500,
                            // Whether or not to advance to the next timer/slide
                            autoAdvance: true,
                            // Optional function call on begining of this timer
                            onBegin: function() { 
                                // This is how you'd get a usable ID of current slide
                                // $( this.getCurrentId() ).hide();
                                this.playMedia('6.wav');
                                
                                if (!this.overlay) {
                                    this.overlay = Ext.Viewport.add({
                                        xtype: 'formpanel',
                                        id: 'contactform',
                                        modal: true,
                                        hideOnMaskTap: true,
                                        showAnimation: {
                                            type: 'popIn',
                                            duration: 250,
                                            easing: 'ease-out'
                                        },
                                        hideAnimation: {
                                            type: 'popOut',
                                            duration: 250,
                                            easing: 'ease-out'
                                        },
                                        centered: true,
                                        width: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                        height: Ext.os.deviceType == 'Phone' ? 220 : 400,
                                        styleHtmlContent: true,
                                        items: [
                                            {
                                                docked: 'top',
                                                xtype: 'toolbar',
                                                title: 'Contact Us'
                                            },
                                            {
                                                xtype: 'formpanel',
                                                title: 'Contact Us'
                                            },
                                            {
                                                xtype: 'fieldset',
                                                title: 'About You:',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        name : 'name',
                                                        label: 'Name'
                                                    },
                                                    {
                                                        xtype: 'emailfield',
                                                        name : 'email',
                                                        label: 'Email'
                                                    }, 
                                                    {
                                                        xtype: 'textfield',
                                                        name : 'phone',
                                                        label: 'Phone'
                                                    },
                                                ]
                                            },
                                            {
                                                xtype: 'fieldset',
                                                title: 'About your business:',
                                                items: [
                                                    {
                                                        xtype: 'textareafield',
                                                        name: 'about',
                                                        maxRows: 4,
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'button',
                                                flex: 1,
                                                text: 'Submit',
                                                handler: function() {
                                                    Ext.getCmp('contactform').hide();
                                                    Ext.getCmp('contactform').reset();
                                                    Ext.Msg.alert('Thanks!', 'Thank you for your interest. We\'ll get back to you shortly.');
                                                },
                                            }
                                        ],
                                        scrollable: true
                                    });
                                 }
                                 var overlay = this.overlay;
                                Ext.get('wupslide-6').on('tap', function() {
                                    overlay.show();
                                });
                                this.overlay.show();
                            }
                        }),
                        Ext.create('WupDemo.util.Timer', {
                            startTime: 1000,
                            autoAdvance: false,
                            onBegin: function() {
                                this.pause();
                            },
                        })
                    ];

                    return timers;
                },
            },
        ]
    },
    
    
    
});