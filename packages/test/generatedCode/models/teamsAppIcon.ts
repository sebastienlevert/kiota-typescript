import {Entity, TeamworkHostedContent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppIcon extends Entity, Partial<Parsable> {
    /** The hostedContent property */
    hostedContent?: TeamworkHostedContent;
    /** The web URL that can be used for downloading the image. */
    webUrl?: string;
}
