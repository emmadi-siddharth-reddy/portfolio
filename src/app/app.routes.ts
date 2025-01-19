import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    {
        path: 'about-component',
        component: AboutMeComponent
    },
    {
        path: 'project-component',
        component: ProjectComponent
    },
    {
        path: 'skills-component',
        component: AppComponent
    }
];
