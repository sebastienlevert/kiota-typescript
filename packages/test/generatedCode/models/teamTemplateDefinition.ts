import {Entity, IdentitySet, Team} from './index';
import {TeamTemplateAudience} from './teamTemplateAudience';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamTemplateDefinition extends Entity, Partial<Parsable> {
    /** The audience property */
    audience?: TeamTemplateAudience;
    /** The categories property */
    categories?: string[];
    /** The description property */
    description?: string;
    /** The displayName property */
    displayName?: string;
    /** The iconUrl property */
    iconUrl?: string;
    /** The languageTag property */
    languageTag?: string;
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The parentTemplateId property */
    parentTemplateId?: string;
    /** The publisherName property */
    publisherName?: string;
    /** The shortDescription property */
    shortDescription?: string;
    /** The teamDefinition property */
    teamDefinition?: Team;
}
