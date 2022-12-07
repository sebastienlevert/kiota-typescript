import {EducationalActivityDetail, InstitutionData, ItemFacet} from './index';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationalActivity extends ItemFacet, Partial<Parsable> {
    /** The month and year the user graduated or completed the activity. */
    completionMonthYear?: DateOnly;
    /** The month and year the user completed the educational activity referenced. */
    endMonthYear?: DateOnly;
    /** The institution property */
    institution?: InstitutionData;
    /** The program property */
    program?: EducationalActivityDetail;
    /** The month and year the user commenced the activity referenced. */
    startMonthYear?: DateOnly;
}
