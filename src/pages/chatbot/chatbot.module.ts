import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatbotPage } from './chatbot';

@NgModule({
  declarations: [
    ChatbotPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatbotPage),
    ComponentsModule
  ],
})
export class ChatbotPageModule {}
