import React from 'react';
import {MDBCard, MDBCardBody, MDBDataTable} from "mdbreact";

const Dictionary = () => {
    const data = {
        columns: [
            {
                label: 'Loại âm',
                field: 'tag',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Phím thường',
                field: 'normalKey',
                width: 200
            },
            {
                label: 'Phím tốc ký',
                field: 'stenoKey',
                width: 200
            }
        ],
        rows: [
            {
                tag: 'Âm đầu',
                normalKey: 's',
                stenoKey: 'S',
            },
            {
                tag: 'Âm đầu',
                normalKey: 't',
                stenoKey: 'T',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'k',
                stenoKey: 'K',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'c',
                stenoKey: 'K',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'h',
                stenoKey: 'H',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'r',
                stenoKey: 'R',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'th',
                stenoKey: 'TH',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'ph',
                stenoKey: 'PH',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'tr',
                stenoKey: 'TR',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'ng',
                stenoKey: 'KR',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'gh',
                stenoKey: 'KP',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'g',
                stenoKey: 'KP',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'd',
                stenoKey: 'SP',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'n',
                stenoKey: 'PR',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'ch',
                stenoKey: 'SK',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'd',
                stenoKey: 'SP',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'm',
                stenoKey: 'RH',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'n',
                stenoKey: 'PR',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'q',
                stenoKey: 'SPH',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'v',
                stenoKey: 'STK',
            },
            {
                tag: 'Âm đầu',
                normalKey: 'p',
                stenoKey: 'SPR',
            },
            {
                tag: 'Âm chính',
                normalKey: 'y',
                stenoKey: 'I',
            },
            {
                tag: 'Âm chính',
                normalKey: 'e',
                stenoKey: 'E',
            },
            {
                tag: 'Âm chính',
                normalKey: 'a',
                stenoKey: 'A',
            },
            {
                tag: 'Âm chính',
                normalKey: 'o',
                stenoKey: 'O',
            },
            {
                tag: 'Âm chính',
                normalKey: 'ie',
                stenoKey: 'IE',
            },
            {
                tag: 'Âm chính',
                normalKey: 'ua',
                stenoKey: 'UO',
            },
            {
                tag: 'Âm chính',
                normalKey: 'ê',
                stenoKey: 'OE',
            },
            {
                tag: 'Âm chính',
                normalKey: 'ư',
                stenoKey: 'UW',
            },
            {
                tag: 'Âm chính',
                normalKey: 'ơ',
                stenoKey: 'W',
            },
            {
                tag: 'Âm chính',
                normalKey: 'u',
                stenoKey: 'IU',
            },
            {
                tag: 'Âm chính',
                normalKey: 'p',
                stenoKey: 'S',
            },
            {
                tag: 'Âm chính',
                normalKey: 'ô',
                stenoKey: 'OW',
            },
            {
                tag: 'Âm chính',
                normalKey: 'uy',
                stenoKey: 'UY',
            },
            {
                tag: 'Âm chính',
                normalKey: 'uê',
                stenoKey: 'UE',
            },
            {
                tag: 'Âm chính',
                normalKey: 'uya',
                stenoKey: 'EY',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'n',
                stenoKey: 'N',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'o',
                stenoKey: 'JK',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'u',
                stenoKey: 'JG',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'i',
                stenoKey: 'J',
            },
            {
                tag: 'Âm cuối',
                normalKey: '',
                stenoKey: 'JN',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'c',
                stenoKey: 'NK',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'ch',
                stenoKey: 'GK',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'p',
                stenoKey: 'TK',
            },
            {
                tag: 'Âm cuối',
                normalKey: 't',
                stenoKey: 'NT',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'ng',
                stenoKey: 'G',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'nh',
                stenoKey: 'K',
            },
            {
                tag: 'Âm cuối',
                normalKey: 'm',
                stenoKey: 'T',
            }
        ]
    };

    return (
        <MDBCard>
            <MDBCardBody>
                <MDBDataTable
                    displayEntries={false}
                    bordered
                    striped
                    small
                    noBottomColumns={true}
                    data={data}
                />
            </MDBCardBody>
        </MDBCard>

    );
}

export default Dictionary;
