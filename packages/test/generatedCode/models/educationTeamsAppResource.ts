import {EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationTeamsAppResource extends EducationResource, Partial<Parsable> {
    /** The appIconWebUrl property */
    appIconWebUrl?: string;
    /** The appId property */
    appId?: string;
    /** The teamsEmbeddedContentUrl property */
    teamsEmbeddedContentUrl?: string;
    /** The webUrl property */
    webUrl?: string;
}
