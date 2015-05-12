Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'UserApp',
    
    controllers: [
        'User'
    ],
    
    appFolder: 'app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            
            items: [
                {
                    width: 600,
                    height: 300,
                    xtype: 'userList'
                }
            ]
        });
    }
});
