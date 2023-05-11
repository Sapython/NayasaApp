import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./welcome_pages/login-page/login-page.module').then(m => m.LoginPagePageModule)
  },
  {
    path: 'sign-up-page',
    loadChildren: () => import('./welcome_pages/sign-up-page/sign-up-page.module').then(m => m.SignUpPagePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./welcome_pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./welcome_pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'f-verificcation',
    loadChildren: () => import('./welcome_pages/f-verificcation/f-verificcation.module').then(m => m.FVerificcationPageModule)
  },
  {
    path: 'r-verificcation',
    loadChildren: () => import('./welcome_pages/r-verificcation/r-verificcation.module').then(m => m.RVerificcationPageModule)
  },
  {
    path: 'f-new-pass',
    loadChildren: () => import('./welcome_pages/f-new-pass/f-new-pass.module').then(m => m.FNewPassPageModule)
  },
  {
    path: 'r-new-pass',
    loadChildren: () => import('./welcome_pages/r-new-pass/r-new-pass.module').then(m => m.RNewPassPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome_pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./welcome_pages/splash/splash.module').then(m => m.SplashPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
