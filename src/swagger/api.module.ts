import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { CompanyService } from './api/company.service';
import { EmployeeService } from './api/employee.service';
import { EntityService } from './api/entity.service';
import { EntityTypeService } from './api/entityType.service';
import { TransactionService } from './api/transaction.service';
import { TransactionTypeService } from './api/transactionType.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ CompanyService, EmployeeService, EntityService, EntityTypeService, TransactionService, TransactionTypeService, UserService ]
})
export class ApiModule {
    public static forConfig(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ {provide: Configuration, useFactory: configurationFactory}]
        }
    }
}
