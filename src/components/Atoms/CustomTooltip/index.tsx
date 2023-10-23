/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import {
  DEFAULT_BASE_PAYLOAD_KEYS_RENDER_RULES,
  keyExistsOnObject,
  PRE_MAPPED_BASE_PAYLOAD_KEY_UNIT,
  timestampToLocalDate,
  timestampToLocalHour,
} from '~/utils';
import WeatherIcon from '../WeatherIcon';
import {
  Content,
  ContentWrapper,
  GlassWrapper,
  Header,
  ItemRow,
  Label,
  LabelWrapper,
  SafeAreaWrapper,
  TimeInfo,
  Value,
  ValueWrapper,
  WeatherWrapper,
  Wrapper,
} from './styles';

type RenderBasePayloadDataProps = {
  basePayload: any;
  basePayloadKeys: string[];
  basePayloadKeysRenderRules?: BasePayloadKeysRenderRules;
};

type RenderWeatherIconProps = {
  basePayload: any;
  weatherKey?: string;
};

const renderWeatherIcon = ({
  basePayload,
  weatherKey = 'weather',
}: RenderWeatherIconProps) => {
  if (keyExistsOnObject(basePayload, weatherKey, '02dw' as WeatherIcons)) {
    const weatherIconCode = basePayload[weatherKey];
    return (
      <WeatherWrapper>
        <WeatherIcon weatherIconCode={weatherIconCode} />
      </WeatherWrapper>
    );
  }

  return null;
};

const renderBasePayloadData = ({
  basePayload,
  basePayloadKeys,
  basePayloadKeysRenderRules = DEFAULT_BASE_PAYLOAD_KEYS_RENDER_RULES,
}: RenderBasePayloadDataProps) => {
  return (
    <Content>
      {basePayloadKeys.map(key =>
        basePayloadKeysRenderRules[key as PreMappedBasePayloadKey] ===
        false ? null : (
          <ItemRow key={key}>
            <LabelWrapper>
              <Label>{`${key}: `}</Label>
            </LabelWrapper>
            <ValueWrapper>
              <Value>
                {basePayload[key]
                  ? `${basePayload[key]}${
                      PRE_MAPPED_BASE_PAYLOAD_KEY_UNIT[
                        key as PreMappedBasePayloadKey
                      ]
                    }`
                  : 'S/ Registro'}
              </Value>
            </ValueWrapper>
          </ItemRow>
        ),
      )}
      {renderWeatherIcon({ basePayload })}
    </Content>
  );
};

const CustomTooltip: FC<ComponentAtomicTooltipProps> = ({ payload }) => {
  if (!payload) return null;
  if (payload.length === 0) return null;

  const basePayload = payload[0].payload;
  const {
    payload: { timestamp },
  } = payload[0];
  const basePayloadKeys = Object.keys(basePayload);

  const date = timestampToLocalDate(timestamp);
  const hour = timestampToLocalHour(timestamp);

  return (
    <Wrapper>
      <GlassWrapper>
        <ContentWrapper>
          <SafeAreaWrapper>
            <Header>
              <TimeInfo>{date}</TimeInfo>
              <TimeInfo>{hour}</TimeInfo>
            </Header>
            {renderBasePayloadData({ basePayload, basePayloadKeys })}
          </SafeAreaWrapper>
        </ContentWrapper>
      </GlassWrapper>
    </Wrapper>
  );
};

export default CustomTooltip;
