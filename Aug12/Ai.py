import fitz  # PyMuPDF for PDF
# from pptx import Presentation  # python-pptx for PPT
from transformers import pipeline

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        text += page.get_text()
    return text

# # Function to extract text from PPT
# def extract_text_from_ppt(ppt_path):
#     text = ""
#     presentation = Presentation(ppt_path)
#     for slide in presentation.slides:
#         for shape in slide.shapes:
#             if hasattr(shape, "text"):
#                 text += shape.text
#     return text

# Load a pre-trained question-answering model
qa_pipeline = pipeline("question-answering")

# Function to answer questions based on the text
def answer_question(text, question):
    result = qa_pipeline(question=question, context=text)
    return result['answer']

# Main function
def main(file_path, question):
    if file_path.endswith('.pdf'):
        text = extract_text_from_pdf(file_path)
   #  elif file_path.endswith('.pptx'):
   #      text = extract_text_from_ppt(file_path)
    else:
        raise ValueError("Unsupported file format")

    answer = answer_question(text, question)
    print(f"Question: {question}")
    print(f"Answer: {answer}")

if __name__ == "__main__":
    # Example usage
    file_path = 'BDA u1.pdf'  # Replace with your file path
    question = 'What are the 3 Vs of BDA?'  # Replace with your question
    main(file_path, question)
