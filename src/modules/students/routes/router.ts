import type { RouteRecordRaw } from "vue-router";


export const dashboardRoutes: RouteRecordRaw = {
    path:'dashboard',
    name: 'dashboard',
    component: () => import('@/modules/students/layouts/LayoutStudentView.vue'),
    children: [
        {
            path: 'actividades',
            name: 'activities',
            component: ()=> import('@/modules/students/views/ActivitiesView.vue')
        },
        {
            path: 'actividad',
            name: 'activity',
            component: ()=> import('@/modules/students/views/ActivityView.vue')
        },
        {
            path: 'examenes',
            name: 'exams',
            component: ()=> import('@/modules/students/views/ExamsView.vue')
        },
        {
            path: 'examen',
            name: 'exam',
            component: ()=> import('@/modules/students/views/ExamView.vue')
        },
        {
            path: 'perfil_academico',
            name: 'academicPerfil',
            component: ()=> import('@/modules/students/views/PerfilAcademicView.vue')
        }
    ]
}