import { Routes } from '@angular/router';
import { InterpolationBasicsComponent } from './component/interpolation-basics/interpolation-basics.component';
import { ExpressionInterpolationComponent } from './component/expression-interpolation/expression-interpolation.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';
import { FormInputBindingComponent } from './component/form-input-binding/form-input-binding.component';
import { InterpolationNgmodelComponent } from './component/interpolation-ngmodel/interpolation-ngmodel.component';
import { PropertyBindingComponent } from './component/property-binding/property-binding.component';
import { DisableButtonComponent } from './component/disable-button/disable-button.component';
import { DynamicStylingComponent } from './component/dynamic-styling/dynamic-styling.component';
import { ButtonClickEventComponent } from './component/button-click-event/button-click-event.component';
import { InputEventHandlingComponent } from './component/input-event-handling/input-event-handling.component';
import { PassingDataEventComponent } from './component/passing-data-event/passing-data-event.component';
import { ConditionalClassBindingComponent } from './component/conditional-class-binding/conditional-class-binding.component';
import { MultipleClassBindingComponent } from './component/multiple-class-binding/multiple-class-binding.component';
import { ToggleClassComponent } from './component/toggle-class/toggle-class.component';
import { CombinedBindingComponent } from './component/combined-binding/combined-binding.component';

export const routes: Routes = [
  { path: '', redirectTo: '/interpolation-basics', pathMatch: 'full' },
  { path: 'interpolation-basics', component: InterpolationBasicsComponent },
  { path: 'expression-interpolation', component: ExpressionInterpolationComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'form-input-binding', component: FormInputBindingComponent },
  { path: 'interpolation-ngmodel', component: InterpolationNgmodelComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'disable-button', component: DisableButtonComponent },
  { path: 'dynamic-styling', component: DynamicStylingComponent },
  { path: 'button-click-event', component: ButtonClickEventComponent },
  { path: 'input-event-handling', component: InputEventHandlingComponent },
  { path: 'passing-data-event', component: PassingDataEventComponent },
  { path: 'conditional-class-binding', component: ConditionalClassBindingComponent },
  { path: 'multiple-class-binding', component: MultipleClassBindingComponent },
  { path: 'toggle-class', component: ToggleClassComponent },
  { path: 'combined-binding', component: CombinedBindingComponent },
  { path: '**', redirectTo: '/interpolation-basics' }
];
