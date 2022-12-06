import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationPowerPointResource extends EducationResource, Partial<Parsable> {
    /** Location of the file on disk. */
    fileUrl?: string;
}
