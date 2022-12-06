import {CountryLookupMethodType} from './countryLookupMethodType';
import {NamedLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CountryNamedLocation extends NamedLocation, Partial<Parsable> {
    /** List of countries and/or regions in two-letter format specified by ISO 3166-2. Required. */
    countriesAndRegions?: string[];
    /** Determines what method is used to decide which country the user is located in. Possible values are clientIpAddress(default) and authenticatorAppGps. Note: authenticatorAppGps is not yet supported in the Microsoft Cloud for US Government. */
    countryLookupMethod?: CountryLookupMethodType;
    /** true if IP addresses that don't map to a country or region should be included in the named location. Optional. Default value is false. */
    includeUnknownCountriesAndRegions?: boolean;
}
