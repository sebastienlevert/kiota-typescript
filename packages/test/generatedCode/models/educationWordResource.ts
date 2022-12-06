import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationWordResource extends EducationResource, Partial<Parsable> {
    /** Location of the file on disk. */
    fileUrl?: string;
}
