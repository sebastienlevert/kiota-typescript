import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationExcelResource extends EducationResource, Partial<Parsable> {
    /** Pointer to the Excel file object. */
    fileUrl?: string;
}
