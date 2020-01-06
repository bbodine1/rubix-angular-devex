import { Component } from '@angular/core';

@Component({
  selector: 'app-parts-management',
  templateUrl: './parts-management.component.html',
  styleUrls: ['./parts-management.component.scss']
})
export class PartsManagementComponent {
modules: any = [
    {
        "name": "Test1",
        "info": "Combine analysis and visualization to tell a recurring story with your data.",
        "icon": "menu_book",
        "link": "/data-stories",
        "group": "zzzzzzzz"
    },
    {
        "name": "Test2",
        "info": "Analyze your data using powerful pivot grid, charting, and smart grid tools.",
        "icon": "bubble_chart",
        "link": "/data-visualization",
        "group": "zzzzzzzz"
    },
    {
        "name": "Test3",
        "info": "Visualize your data in customizable layouts utilizing a variety of controls.",
        "icon": "view_compact",
        "link": "/live-views",
        "group": "zzzzzzzz"
    },
    {
        "name": "Test4",
        "info": "Create and view detailed reports of your data with a WYSIWYG designer.",
        "icon": "insert_drive_file",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "Test5",
        "info": "Import data from any data source on your schedule.",
        "icon": "save_alt",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    }
]  
}