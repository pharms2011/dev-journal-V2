import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MockitoComponent} from './modules/subjects/components/mockito/mockito.component';
import {CComponent} from './modules/subjects/components/c/c.component';
import {KafkaComponent} from './modules/subjects/components/kafka/kafka.component';
import {PythonComponent} from './modules/subjects/components/python/python.component';
import {AzureComponent} from './modules/subjects/components/azure/azure.component';
import {OopConceptsComponent} from './modules/subjects/components/oop-concepts/oop-concepts.component';
import {SpringBootAdminComponent} from './modules/subjects/components/spring-boot-admin/spring-boot-admin.component';
import {UnityComponent} from './modules/subjects/components/unity/unity.component';
import {CSharpComponent} from './modules/subjects/components/c-sharp/c-sharp.component';
import {FlywayComponent} from './modules/subjects/components/flyway/flyway.component';
import {LinuxComponent} from './modules/subjects/components/linux/linux.component';
import {CorsComponent} from './modules/subjects/components/cors/cors.component';
import {ReactjsComponent} from './modules/subjects/components/reactjs/reactjs.component';
import {AvroComponent} from './modules/subjects/components/avro/avro.component';
import {CssComponent} from './modules/subjects/components/css/css.component';
import {AngularComponent} from './modules/subjects/components/angular/angular.component';
// tslint:disable-next-line:max-line-length
import {JavaDeveloperGuidelinesComponent} from './modules/subjects/components/java/java-developer-guidelines/java-developer-guidelines.component';
import {JUnitComponent} from './modules/subjects/components/junit/junit.component';
import {OAuth2Component} from './modules/subjects/components/o-auth2/o-auth2.component';
import {ProtractorComponent} from './modules/subjects/components/angular/protractor/protractor.component';
import {AngularMaterialComponent} from './modules/subjects/components/angular/angular-material/angular-material.component';
import {GitComponent} from './modules/subjects/components/git/git.component';
import {SpringJavaComponent} from './modules/subjects/components/spring-java/spring-java.component';
import {JavaComponent} from './modules/subjects/components/java/java.component';
import {NgrxComponent} from './modules/subjects/components/ngrx/ngrx.component';
import {Pm2Component} from './modules/subjects/components/pm2/pm2.component';
import {AmazonWebServicesComponent} from './modules/subjects/components/amazon-web-services/amazon-web-services.component';
import {DjangoComponent} from './modules/subjects/components/django/django.component';
import {JaspersoftComponent} from './modules/subjects/components/jaspersoft/jaspersoft.component';
import {CassandraComponent} from './modules/subjects/components/cassandra/cassandra.component';
import {WelcomeComponent} from './modules/core/components/welcome/welcome.component';
import {SenchaTouchComponent} from './modules/subjects/components/sencha-touch/sencha-touch.component';
import {ExtjsComponent} from './modules/subjects/components/extjs/extjs.component';

const routes: Routes = [
  {path: 'Amazon-Web-Services', component: AmazonWebServicesComponent},
  {path: 'Angular', component: AngularComponent},
  {path: 'Angular-Material', component: AngularMaterialComponent},
  {path: 'Avro', component: AvroComponent},
  {path: 'Azure', component: AzureComponent},
  {path: 'C', component: CComponent},
  {path: 'C-Sharp', component: CSharpComponent},
  {path: 'cassandra', component: CassandraComponent},
  {path: 'CORS', component: CorsComponent},
  {path: 'CSS', component: CssComponent},
  {path: 'django', component: DjangoComponent},
  {path: 'ExtJS', component: ExtjsComponent},
  {path: 'flyway', component: FlywayComponent},
  {path: 'Git', component: GitComponent},
  {path: 'Jaspersoft', component: JaspersoftComponent},
  {path: 'Java', component: JavaComponent},
  {path: 'JavaGuidelines', component: JavaDeveloperGuidelinesComponent},
  {path: 'JUnit', component: JUnitComponent},
  {path: 'Kafka', component: KafkaComponent},
  {path: 'Linux', component: LinuxComponent},
  {path: 'Mockito', component: MockitoComponent},
  {path: 'NgRx', component: NgrxComponent},
  {path: 'OAuth2', component: OAuth2Component},
  {path: 'OOP', component: OopConceptsComponent},
  {path: 'pm2', component: Pm2Component},
  {path: 'Protractor', component: ProtractorComponent},
  {path: 'Python', component: PythonComponent},
  {path: 'ReactJS', component: ReactjsComponent},
  {path: 'Sencha', component: SenchaTouchComponent},
  {path: 'Spring-Boot-Admin', component: SpringBootAdminComponent},
  {path: 'Spring', component: SpringJavaComponent},
  {path: 'Unity', component: UnityComponent},
  {path: 'Welcome', component: WelcomeComponent},
  {path: '**', redirectTo: 'Welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
