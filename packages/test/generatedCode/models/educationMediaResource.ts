import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationMediaResource extends EducationResource, Partial<Parsable> {
    /** Location of the file on shared point folder. Required */
    fileUrl?: string;
}
