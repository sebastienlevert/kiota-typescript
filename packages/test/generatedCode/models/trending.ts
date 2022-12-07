import {Entity, ResourceReference, ResourceVisualization} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Trending extends Entity, Partial<Parsable> {
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The resource property */
    resource?: Entity;
    /** The resourceReference property */
    resourceReference?: ResourceReference;
    /** The resourceVisualization property */
    resourceVisualization?: ResourceVisualization;
    /** Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value. */
    weight?: number;
}
