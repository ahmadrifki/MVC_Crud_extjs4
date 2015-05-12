Ext.define('UserApp.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userList',
    id:'userID',
    store: 'User',
    title : 'Users',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',        
            items: [
                {
                    iconCls: 'user_add',
                    text: 'Add',
                    action: 'addUser'
                },
                {
                    iconCls: 'user_delete',
                    text: 'Delete',
                    disabled: true,
                    itemId: 'deleteUser',
                    action: 'delete'
                },{  
                    xtype     : 'combobox',
                    action     : 'search',
                    minChars  : 1,
                    fieldLabel: 'Company Name',
                    emptyText : 'Company Name',
                    store     : 'User', 
                    displayField  : 'name',
                    queryMode: 'local',
                    listConfig: {
                    loadingText: 'Loading...',
                        width : '30%',
                        height : '100%',
                        getInnerTpl: function() {
                            return '<div class="search-item">' +
                                   '<span><img width="48px" height="48px" src="resources/icons/user.png" /></span>' +
                                   '<div class="nama">{name}</div>' +
                                   '</div>';
                        }
                    }
                }
            ]        
        },
        {
            xtype: 'pagingtoolbar',
            store: 'User',   // mismo que el store GridPanel
            dock: 'bottom',
            displayInfo: true
        }
    ],

    initComponent: function() {

        this.columns = [
            {header: 'ID',  dataIndex: 'userID',  flex: 1},
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Last Name',  dataIndex: 'lastname',  flex: 1},
            {header: 'Age', dataIndex: 'age', flex: 1}
        ];

        this.callParent(arguments);
    }
});