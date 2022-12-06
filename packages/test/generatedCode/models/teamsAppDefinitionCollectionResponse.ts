import {BaseCollectionPaginationCountResponse, TeamsAppDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamsAppDefinition[];
}
