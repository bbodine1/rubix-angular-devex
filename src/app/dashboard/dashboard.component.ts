import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  modules: any = [
    {
        "name": "Data Stories",
        "info": "Combine analysis and visualization to tell a recurring story with your data.",
        "icon": "menu_book",
        "link": "/data-stories",
        "group": "zzzzzzzz"
    },
    {
        "name": "Data Visualization",
        "info": "Analyze your data using powerful pivot grid, charting, and smart grid tools.",
        "icon": "bubble_chart",
        "link": "/data-visualization",
        "group": "zzzzzzzz"
    },
    {
        "name": "Live Views",
        "info": "Visualize your data in customizable layouts utilizing a variety of controls.",
        "icon": "view_compact",
        "link": "/live-views",
        "group": "zzzzzzzz"
    },
    {
        "name": "Reporting",
        "info": "Create and view detailed reports of your data with a WYSIWYG designer.",
        "icon": "insert_drive_file",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "Data Import",
        "info": "Import data from any data source on your schedule.",
        "icon": "save_alt",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "Permissions",
        "info": "Manage user permissions and their access to end items across the application.",
        "icon": "https",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "Fund Report",
        "info": "Current version of the Fund Report. Analyze and Export.",
        "icon": "description",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "POM",
        "info": "Accomplish objectives and allocate resources.",
        "icon": "blur_on",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "Acquisitions",
        "info": "Track acquisition requests from request to approval.",
        "icon": "shopping_cart",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "Parts Management",
        "info": "Parts Management application now powered by Rubix BI.",
        "icon": "business_center",
        "link": "/parts-management",
        "group": "zzzzzzzz"
    },
    {
        "name": "AEST",
        "info": "Aviation Enterprise Synchronization Tool - Scheduling and Product Browser",
        "icon": "flight",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "BDKMS",
        "info": "Track opportunities and better understand your business pipeline.",
        "icon": "trending_up",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    },
    {
        "name": "Artificial Intelligence",
        "info": "Harness the power of AI to extract insight from your data.",
        "icon": "code",
        "link": "/xxxxxxx",
        "group": "zzzzzzzz"
    }
]
}
