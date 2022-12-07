import {Entity, TeamsAppDefinition} from './index';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsApp extends Entity, Partial<Parsable> {
    /** The details for each version of the app. */
    appDefinitions?: TeamsAppDefinition[];
    /** The name of the catalog app provided by the app developer in the Microsoft Teams zip app package. */
    displayName?: string;
    /** The distributionMethod property */
    distributionMethod?: TeamsAppDistributionMethod;
    /** The ID of the catalog provided by the app developer in the Microsoft Teams zip app package. */
    externalId?: string;
}
