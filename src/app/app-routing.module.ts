import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "language-selector",
    pathMatch: "full"
  },
  {
    path: "language-selector",
    loadChildren: () => import("./language-selector/language-selector.module").then(m => m.LanguageSelectorModule)
  },
  {
    path: "selected-language",
    loadChildren: () => import("./selected-language/selected-language.module").then(m => m.SelectedLanguageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
