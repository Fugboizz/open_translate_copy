"use client";
import { Editor } from "@tinymce/tinymce-react";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Download, EditPencil, Star } from "iconoir-react";
import {
  creativityLevels,
  languages,
  modelAI,
  optionsCopy,
  tones,
  viewPoints,
} from "../../../constants/ai-rewriter/data";
import { useForm } from "antd/es/form/Form";
const { Title } = Typography;

export default function ReWriter() {
  const [form] = useForm();
  return (
    <div className="bg-[#F5F9FB] w-full h-auto pb-12 flex px-12 gap-12 pt-12">
      <Card className="w-[40%]">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex gap-2">
              <div className="w-8 h-8 flex justify-center items-center rounded-md bg-[#D1D3E0]">
                <EditPencil />
              </div>
              <Title level={4}>Viết Lại Với AI</Title>
            </div>
            <p className="text-[#728096] text-xs">
              Viết lại và cải thiện nội dung của bạn với sự giúp đỡ của AI chỉ
              trong vài giây
            </p>
          </div>
          <Form>
            <div className="">
              <Form.Item name="language">
                <Title level={5}>Ngôn ngữ</Title>
                <Select
                  className="w-full"
                  size="large"
                  defaultValue="vn"
                  options={languages}
                />
              </Form.Item>
              <Form.Item
                name="dataInput"
                rules={[{ required: true, message: "Hãy nhập văn bản !" }]}
              >
                <Title level={5}>
                  Văn bản mục tiêu <strong className="text-red-500">*</strong>
                </Title>
                <TextArea
                  placeholder="Dán văn bản mà bạn muốn viết lại hoặc cải thiện..."
                  rows={10}
                />
              </Form.Item>
              <Form.Item name="modelAI">
                <Title level={5}>Chọn mô hình AI</Title>
                <Select
                  className="w-full"
                  size="large"
                  defaultValue={modelAI[0]}
                  options={modelAI}
                />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item name="creative">
                  <Title level={5}>Sự sáng tạo</Title>
                  <Select
                    className="w-full"
                    size="large"
                    defaultValue={creativityLevels[0]}
                    options={creativityLevels}
                  />
                </Form.Item>
                <Form.Item name="tone">
                  <Title level={5}>Tone of Voice</Title>
                  <Select
                    className="w-full"
                    size="large"
                    defaultValue={tones[0]}
                    options={tones}
                  />
                </Form.Item>
                <Form.Item name="viewPoint">
                  <Title level={5}>Quan điểm</Title>
                  <Select
                    className="w-full"
                    size="large"
                    defaultValue={viewPoints[0]}
                    options={viewPoints}
                  />
                </Form.Item>
                <Form.Item name="numberResult">
                  <Title level={5}>Số lượng kết quả</Title>
                  <InputNumber
                    className="w-full"
                    size="large"
                    placeholder="eg.5"
                  />
                </Form.Item>
              </div>
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-3xl w-full"
              >
                Viết lại AI
              </Button>
            </div>
          </Form>
        </div>
      </Card>
      <Card className="w-full">
        <div className="flex justify-between mb-6">
          <div className="flex gap-4 w-[50%]">
            <Input defaultValue="Tài liệu mới" />
            <Select
              size="large"
              className="w-full"
              value="1"
              options={[{ value: "1", label: "Tất cả sổ tay" }]}
            />
          </div>
          <Dropdown menu={{ items: optionsCopy }} trigger={["click"]}>
            <div className="w-8 h-8 flex justify-center items-center rounded-md bg-[#D1D3E0]">
              <Download />
            </div>
          </Dropdown>
        </div>
        <Editor />
      </Card>
    </div>
  );
}
