import styled from 'styled-components';
import checkActive from '../../../../assets/check_active.svg';
import checkInactive from '../../../../assets/check_inactive.svg';

// ListItem 관련 스타일링
export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
`;

export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    /* height: 30px; */
`;

export const UpperRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    gap: 0.2rem;
    font-weight: 700;
`;

export const LowerRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
`;

export const MedicineInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 0.3rem;
`;

export const CheckBoxImage = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    align-self: center;
`;

export const ListNum = styled.div`
    align-self: center;
    font-weight: bold;
`;

// ButtonContainer 스타일링
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
`;

export const Description = styled.p`
    color: #9c9c9c;
    text-align: center;
    margin-bottom: 1rem;
`;

// ListItem 컴포넌트
export function ListItemComponent({ item, index, checked, handleCheck }) {
    return (
        <ListItem key={index}>
            <ListNum>{index + 1}</ListNum>
            <ListContent>
                <UpperRow>
                    <div>{item.intakeAt.substring(0, 10)}</div>
                    <div>{item.hospitalName !== 'Unknown' ? item.hospitalName : ''}</div>
                    <div>{item.pharmacyName !== 'Unknown' ? item.pharmacyName : '알 수 없음'}</div>
                </UpperRow>
            </ListContent>
            <CheckBoxImage
                src={checked ? checkActive : checkInactive}
                alt="checkbox"
                onClick={() => handleCheck(index)}
            />
        </ListItem>
    );
}
