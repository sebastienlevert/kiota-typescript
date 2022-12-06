import {BaseCollectionPaginationCountResponse, Windows10SecureAssessmentConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10SecureAssessmentConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10SecureAssessmentConfiguration[];
}
