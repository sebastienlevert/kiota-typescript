import {ColumnTypes} from './columnTypes';
import {deserializeIntoBooleanColumn} from './deserializeIntoBooleanColumn';
import {deserializeIntoCalculatedColumn} from './deserializeIntoCalculatedColumn';
import {deserializeIntoChoiceColumn} from './deserializeIntoChoiceColumn';
import {deserializeIntoColumnValidation} from './deserializeIntoColumnValidation';
import {deserializeIntoContentApprovalStatusColumn} from './deserializeIntoContentApprovalStatusColumn';
import {deserializeIntoContentTypeInfo} from './deserializeIntoContentTypeInfo';
import {deserializeIntoCurrencyColumn} from './deserializeIntoCurrencyColumn';
import {deserializeIntoDateTimeColumn} from './deserializeIntoDateTimeColumn';
import {deserializeIntoDefaultColumnValue} from './deserializeIntoDefaultColumnValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoGeolocationColumn} from './deserializeIntoGeolocationColumn';
import {deserializeIntoHyperlinkOrPictureColumn} from './deserializeIntoHyperlinkOrPictureColumn';
import {deserializeIntoLookupColumn} from './deserializeIntoLookupColumn';
import {deserializeIntoNumberColumn} from './deserializeIntoNumberColumn';
import {deserializeIntoPersonOrGroupColumn} from './deserializeIntoPersonOrGroupColumn';
import {deserializeIntoTermColumn} from './deserializeIntoTermColumn';
import {deserializeIntoTextColumn} from './deserializeIntoTextColumn';
import {deserializeIntoThumbnailColumn} from './deserializeIntoThumbnailColumn';
import {ColumnDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnDefinition(columnDefinition: ColumnDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(columnDefinition),
        "boolean": n => { columnDefinition.boolean = n.getObject(deserializeIntoBooleanColumn) as any ; },
        "calculated": n => { columnDefinition.calculated = n.getObject(deserializeIntoCalculatedColumn) as any ; },
        "choice": n => { columnDefinition.choice = n.getObject(deserializeIntoChoiceColumn) as any ; },
        "columnGroup": n => { columnDefinition.columnGroup = n.getStringValue() as any ; },
        "contentApprovalStatus": n => { columnDefinition.contentApprovalStatus = n.getObject(deserializeIntoContentApprovalStatusColumn) as any ; },
        "currency": n => { columnDefinition.currency = n.getObject(deserializeIntoCurrencyColumn) as any ; },
        "dateTime": n => { columnDefinition.dateTime = n.getObject(deserializeIntoDateTimeColumn) as any ; },
        "defaultValue": n => { columnDefinition.defaultValue = n.getObject(deserializeIntoDefaultColumnValue) as any ; },
        "description": n => { columnDefinition.description = n.getStringValue() as any ; },
        "displayName": n => { columnDefinition.displayName = n.getStringValue() as any ; },
        "enforceUniqueValues": n => { columnDefinition.enforceUniqueValues = n.getBooleanValue() as any ; },
        "geolocation": n => { columnDefinition.geolocation = n.getObject(deserializeIntoGeolocationColumn) as any ; },
        "hidden": n => { columnDefinition.hidden = n.getBooleanValue() as any ; },
        "hyperlinkOrPicture": n => { columnDefinition.hyperlinkOrPicture = n.getObject(deserializeIntoHyperlinkOrPictureColumn) as any ; },
        "indexed": n => { columnDefinition.indexed = n.getBooleanValue() as any ; },
        "isDeletable": n => { columnDefinition.isDeletable = n.getBooleanValue() as any ; },
        "isReorderable": n => { columnDefinition.isReorderable = n.getBooleanValue() as any ; },
        "isSealed": n => { columnDefinition.isSealed = n.getBooleanValue() as any ; },
        "lookup": n => { columnDefinition.lookup = n.getObject(deserializeIntoLookupColumn) as any ; },
        "name": n => { columnDefinition.name = n.getStringValue() as any ; },
        "number": n => { columnDefinition.number = n.getObject(deserializeIntoNumberColumn) as any ; },
        "personOrGroup": n => { columnDefinition.personOrGroup = n.getObject(deserializeIntoPersonOrGroupColumn) as any ; },
        "propagateChanges": n => { columnDefinition.propagateChanges = n.getBooleanValue() as any ; },
        "readOnly": n => { columnDefinition.readOnly = n.getBooleanValue() as any ; },
        "required": n => { columnDefinition.required = n.getBooleanValue() as any ; },
        "sourceColumn": n => { columnDefinition.sourceColumn = n.getObject(deserializeIntoColumnDefinition) as any ; },
        "sourceContentType": n => { columnDefinition.sourceContentType = n.getObject(deserializeIntoContentTypeInfo) as any ; },
        "term": n => { columnDefinition.term = n.getObject(deserializeIntoTermColumn) as any ; },
        "text": n => { columnDefinition.text = n.getObject(deserializeIntoTextColumn) as any ; },
        "thumbnail": n => { columnDefinition.thumbnail = n.getObject(deserializeIntoThumbnailColumn) as any ; },
        "type": n => { columnDefinition.type = n.getEnumValue<ColumnTypes>(ColumnTypes) as any ; },
        "validation": n => { columnDefinition.validation = n.getObject(deserializeIntoColumnValidation) as any ; },
    }
}
