import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 0px 20px;
  border: 4px dashed #AAAAAA;
  border-radius: 20px;
`;

export const Input = styled.input`
  background: #e9effb;
  border-style: none none dashed none;
  margin: 10px;
  padding: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: #4a688a;
  border-radius: 20px;
  border: 2px solid black;
  color: white;
  font-size: 20px;
  padding: 10px;
`;

export const Card = styled.div`
  text-align: start;
  margin: 10px;
  padding: 10px 20px;
  background: #f4f2f3;
  border: 2px solid black;
  border-radius: 20px;
`;

export const Label = styled.label`
  padding-bottom: 10px;
  align-items: flex-start;
  font-weight: bold;
`;

export const Span = styled.span`
  justify-content: end;
`;

export const HStack = styled.div`
  margin: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  display: flex;
  border-style: none none dashed none;
  border-color: #A5A5A5;
  border-width: 3px;
  justify-content: space-between;
  width: -webkit-fill-available;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px;
`;
