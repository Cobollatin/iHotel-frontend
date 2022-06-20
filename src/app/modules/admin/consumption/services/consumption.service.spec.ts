import { TestBed } from '@angular/core/testing';
import {ConsumptionService} from './consumption.service';



describe('StudentsService', () => {
    let service: ConsumptionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ConsumptionService);
    });

    it('should create the app', () => {
        expect(service).toBeTruthy();
    });
});
